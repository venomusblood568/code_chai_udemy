// The asyncHandler function takes an asynchronous request handler function (requestHandle) as an argument.
const asyncHandler = (requestHandle) => {
  // Returns a new function that wraps the original request handler.
  return (req, res, next) => {
    // Execute the request handler and resolve it as a Promise.
    // If it throws an error, it will be caught and passed to the next middleware via next(err).
    Promise.resolve(requestHandle(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
