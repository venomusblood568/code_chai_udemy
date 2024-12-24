// Define a class to standardize API responses.
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // HTTP status code (e.g., 200, 404).
    this.data = data; // Payload of the response.
    this.message = message; // Description of the response status.
    this.success = statusCode < 400; // Boolean indicating if the response is successful (status code < 400).
  }
}

export { ApiResponse };
