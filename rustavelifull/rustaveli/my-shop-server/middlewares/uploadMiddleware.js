const multer = require('multer');
const path = require('path');

// Storage configuration for images using Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a timestamp
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
