import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORGIN,
    credentials: true,
  })
);

//common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//import Routes
import healthcheckerRouter from "./routes/healthcheck.routes.js"

//routes
app.use("/api/v1/healthcheck",healthcheckerRouter)


export { app };
