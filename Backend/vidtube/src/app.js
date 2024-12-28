import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import healthcheckerRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";
import errorHandler from "./middlewares/error.middlewares.js";


dotenv.config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

// Common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/healthcheck", healthcheckerRouter);
app.use("/api/v1/users", userRouter);

// Error handling middleware
app.use(errorHandler);

export { app };
