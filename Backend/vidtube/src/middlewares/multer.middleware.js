import multer from "multer";
import path from "path";
import fs from "fs";

// Get the directory of the current file
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Ensure the target directory exists
const tempDir = path.join(__dirname, "public", "temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir); // Use the relative path
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep original file name
  },
});

export const upload = multer({
  storage,
});
