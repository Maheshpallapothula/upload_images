const util = require("util");
const fileUploader = require('../shared/fileupload')
const singleImageUpload = util.promisify(fileUploader.s3FileUploadAPI().single('image'))
const multipleImageUpload = util.promisify(fileUploader.s3FileUploadAPI().array('images',10))

exports.imageUploader = async (req, res) => {
    try {
        await singleImageUpload(req, res, (err) => {
            if (err) {
                res.send({
                    status: 500,
                    result: "FAILURE",
                    response: "Failed to upload image." +err,
                })
            }else{
                res.send({
                    status: 200,
                    result: "SUCCESS",
                    response: {
                        uploadedImagePath: req.file.location
                    },
                })
            }
        })
    } catch (e) {
       console.log("err",e);
    }
}

exports.multipleImageUploader = async (req, res) => {
    try {
        await multipleImageUpload(req, res, (err) => {
            if (err) {
                res.send({
                    status: 500,
                    result: "FAILURE",
                    response: "Failed to upload images",
                })
            }else{
                res.send({
                    status: 200,
                    result: "SUCCESS",
                    response: {
                        uploadedImagePath: req.files
                    },
                })
            }
        })
    } catch (e) {
        console.log("err",e);
    }
}