// Define a custom error class for API-specific errors.
class ApiError extends Error {
  constructor(
    statusCode,
    message = "OOpps Something went wrong!!",
    errors = [],
    stack = ""
  ) {
    super(message); // Call the parent Error class constructor with the message.
    this.statusCode = statusCode; // HTTP status code for the error.
    this.data = null; // No data is returned in case of an error.
    this.message = message; // Error message to describe the issue.
    this.success = false; // Indicates that the operation was unsuccessful.
    this.errors = errors; // Additional error details, if any.

    // If a custom stack trace is provided, use it. Otherwise, capture the stack trace automatically.
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
