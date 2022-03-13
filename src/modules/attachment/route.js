const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const {
    getAttachments,
    uploadAttachments,
    deleteAttachments,
} = require('./controller');
const UPLOAD_PATH = require('./constant');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 4 * 1024 * 1024,
    },
});

const router = Router();

router.get('/', getAttachments);
router.post('/', upload.array('imgs'), uploadAttachments);
router.delete('/', deleteAttachments);

module.exports = router;
