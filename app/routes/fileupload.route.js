var express = require('express');
var router = express.Router();
const fileUploadApi = require('../controllers/fileupload.controller');

router.post('/imageUploader', fileUploadApi.imageUploader);
router.post('/multipleImageUploader', fileUploadApi.multipleImageUploader);

module.exports = router;