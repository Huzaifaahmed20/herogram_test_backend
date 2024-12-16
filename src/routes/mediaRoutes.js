const express = require('express');
const router = new express.Router();

const createMedia = require('../controllers/mediaController');
const uploadMiddleware = require('../middleware/multer');

const upload = uploadMiddleware('herogram_media');

router.post('/upload', upload.single('file'), createMedia);

module.exports = router;
