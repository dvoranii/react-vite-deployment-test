import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base64String = process.env.FIRESTORE_SERVICE_ACCOUNT;
const jsonString = Buffer.from(base64String, "base64").toString("utf-8");
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

export default app;
