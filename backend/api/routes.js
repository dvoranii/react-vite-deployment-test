import express from "express";

const router = express.Router();

router.use(express.json());

router.post("/contact", (req, res) => {
  console.log("Received request body:", req.body);

  res.json({
    message: "form Submission received",
    data: req.body,
  });
});

export default router;
