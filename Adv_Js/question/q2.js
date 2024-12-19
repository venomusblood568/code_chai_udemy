function createCounter() {
  let counter = 0; // Initialize counter variable in closure
  return function () {
    return ++counter; // Increment and return the counter on each function call
  };
}

function rateLimiter(fn, limit) {
  let lastCAlled = 0; // Store the timestamp of the last function call
  return function (...args) {
    // Return a new function to wrap the original function
    const now = Date.now(); // Get the current timestamp
    if (now - lastCAlled < limit) {
      // Check if the time since last call is less than the limit
      return `Rate limit exceeded`; // If so, return a rate limit exceeded message
    } else {
      lastCAlled = now; // Update the last called timestamp
      return fn(...args); // Invoke the original function with the provided arguments
    }
  };
}

function memoize(fn) {
  const cache = {}; // Initialize an empty object to store results of function calls
  return function (...args) {
    // Return a new function to wrap the original function
    const key = JSON.stringify(args); // Serialize arguments to create a unique cache key
    if (cache[key]) {
      // Check if the result for the arguments already exists in cache
      return cache[key]; // If yes, return the cached result
    } else {
      const result = fn(...args); // Call the original function and store the result
      cache[key] = result; // Save the result in the cache for future calls
      return result; // Return the computed result
    }
  };
}