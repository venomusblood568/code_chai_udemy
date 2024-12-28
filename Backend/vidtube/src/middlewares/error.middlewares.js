import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;

  //Check if the error is not an instance of ApiError
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || (error instanceof mongoose.Error ? 400 : 500);
    const message = error.message || "Something went wrong";

    error = new ApiError(statusCode, message, error.errors || [], err.stack);
  }

  // Construct error response
  const response = {
    statusCode: error.statusCode,
    message: error.message,
    errors: error.errors || [],
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  };

  return res.status(error.statusCode).json(response);
};

export default errorHandler;
