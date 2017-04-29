///
/// \file   index.js
/// \brief  Server-side routing for our application.
///

// Imports
const Express       = require("express");
const Multer        = require("multer");
const Router        = Express.Router();

// File Uploading
const Upload = Multer();

// Home Page
Router.get("/", (req, res) => {
    res.send("index.html");
});

// Upload
Router.post("/upload", Upload.single("uploadedFile"), (req, res) => {
    // Check to see if a file has been submitted.
    if (!req.file) {
        // If not, return a 400 Bad Request and an error JSON response.
        return res.status(400).json({
            error: "No file uploaded"
        });
    }

    // Otherwise, send the file's name, MIME type, and size
    // in a JSON response.
    return res.status(200).json({
        filename: req.file.originalname,
        mime: req.file.mimetype,
        size: req.file.size
    });
}); 

// Export
module.exports = Router;