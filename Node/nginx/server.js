// Importing necessary modules
const http = require("http"); // Provides HTTP server functionality
const fs = require("fs"); // Provides file system methods to read files
const path = require("path"); // Provides utilities for working with file and directory paths

const port = 3000; // Port number on which the server will listen

// Create an HTTP server
const server = http.createServer((request, response) => {
  // Determine the file path based on the request URL
  // If the URL is the root ("/"), it serves index.html, otherwise, it serves the requested file.
  const filePath = path.join(
    __dirname,
    request.url === "/" ? "index.html" : request.url
  );
  console.log(filePath); // Logs the file path to the console for debugging

  // Extract the file extension to determine the content type
  const extensionName = String(path.extname(filePath)).toLowerCase();

  // MIME types for supported file types (HTML, CSS, JS, PNG)
  const mimeTypes = {
    ".html": "text/html", // For HTML files
    ".css": "text/css", // For CSS files
    ".js": "text/javascript", // For JS files
    ".png": "image/png", // For PNG image files
  };

  // Get the content type based on the file extension, default to "application/octet-stream" for unknown types
  const contentType = mimeTypes[extensionName] || "application/octet-stream";

  // Read the requested file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If an error occurs (e.g., file not found)
      if (err.code === "ENOENT") {
        // If the error is "file not found", send a 404 response with a custom message
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("404: Bhai code fat gaya, koi aur website use kar le!!!!");
      }
    } else {
      // If no error occurs, send a 200 OK response with the appropriate content type
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf-8"); // End the response by sending the content
    }
  });
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`); // Logs when the server is ready
});
