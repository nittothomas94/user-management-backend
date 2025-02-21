const express = require('express');
const multer = require('multer');

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Store in 'public/images' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original file name
  },
});

// Configure Multer for single file upload
const upload = multer({ storage: storage });

const router = express.Router();

// POST route to handle a single file upload
router.post('/', upload.single('avatar'), (req, res) => {
  // 'avatar' is the field name for the uploaded file
  console.log(req.file); // Log the uploaded file
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const fileUrl = 'http://localhost:3000/images/' + req.file.originalname; // Generate file URL

  res.status(200).json({ url: fileUrl }); // Respond with file URL
});

module.exports = router;
