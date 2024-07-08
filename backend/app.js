import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yourproductiondomain.com"]
    : ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
};

app.use(cors(corsOptions));

const base64String = process.env.FIRESTORE_SERVICE_ACCOUNT;

if (!base64String) {
  throw new Error(
    "FIRESTORE_SERVICE_ACCOUNT environment variable is not defined"
  );
}

try {
  const jsonString = Buffer.from(base64String, "base64").toString("utf-8");
  const jsonObject = JSON.parse(jsonString);
  console.log("Parsed JSON Object:", jsonObject);
} catch (error) {
  console.error("Error decoding FIRESTORE_SERVICE_ACCOUNT:", error);
}

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

export default app;
