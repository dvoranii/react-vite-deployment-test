import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
