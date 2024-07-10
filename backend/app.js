import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import routes from "./api/routes.js";
import csrfMiddleware from "./api/middleware/csrf.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.ildidev.com"]
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

csrfMiddleware(app);
app.use("/api", routes);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

export default app;
