import express from "express";
import verifyRecaptcha from "./utils/verifyCaptcha.js";

const router = express.Router();

router.use(express.json());

router.post("/contact", async (req, res) => {
  const { recaptchaToken } = req.body;

  try {
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return res
        .status(400)
        .send({ status: "failed", error: "reCAPTCHA verification failed" });
    }

    res.json({
      message: "Form submission received and reCAPTCHA verified",
      data: req.body,
    });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res.status(500).send({ status: "failed", error: "Server error" });
  }
});

export default router;
