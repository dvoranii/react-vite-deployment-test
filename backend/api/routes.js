import express from "express";
import verifyRecaptcha from "./utils/verifyCaptcha.js";
import sanitizeInput from "./utils/sanitize.js";
import validateInput from "./utils/validate.js";
import saveFormSubmission from "./utils/firestore.js";
import sendEmail from "./utils/sendEmail.js";

const router = express.Router();

router.use(express.json());

router.post("/contact", async (req, res) => {
  let { name, email, message, recaptchaToken } = req.body;

  const nameError = validateInput.name(name);
  const emailError = validateInput.email(email);

  if (nameError || emailError) {
    return res.status(400).send({
      status: "failed",
      errors: { nameError, emailError },
    });
  }

  try {
    name = sanitizeInput.text(name);
    email = sanitizeInput.text(email);
    message = sanitizeInput.message(message);

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return res
        .status(400)
        .send({ status: "failed", error: "reCAPTCHA verification failed" });
    }

    await saveFormSubmission({ name, email, message });

    const emailResult = await sendEmail({ name, email, message });

    if (emailResult.success) {
      res.status(200).send({
        status: "success",
        message: "Form submission received and reCAPTCHA verified",
        data: req.body,
      });
    } else {
      res.status(500).send({ status: "failed", error: emailResult.error });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res.status(500).send({ status: "failed", error: "Server error" });
  }
});

export default router;
