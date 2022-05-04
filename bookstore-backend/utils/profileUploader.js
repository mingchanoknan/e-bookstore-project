const path = require("path"); // for getting file extension
const multer = require("multer"); // for uploading files
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./static/uploads/profile");
    },
    filename: function (req, file, callback) {
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },

});
module.exports = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
          file.mimetype === "image/png" ||
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/jpeg"
        ) {
          cb(null, true);
        } else {
          req.fileValidationError = "File Extension";
          cb(null, false, req.fileValidationError);
        }

    },
  });