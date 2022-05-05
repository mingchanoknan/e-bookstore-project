const path = require("path"); // for getting file extension
const multer = require("multer"); // for uploading files

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.fieldname === "image") {
      callback(null, "./static/uploads/images");
    } else {
      callback(null, "./static/uploads/files");
    }
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + file.originalname + path.extname(file.originalname)
    );
  },
});
module.exports = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.fieldname === "file") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        req.fileValidationError = "File Extension";
        cb(null, false, req.fileValidationError);
      }
    } else if (file.fieldname === "image") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        // check file type to be png, jpeg, or jpg
        cb(null, true);
      } else {
        req.fileValidationError = "File Extension";
        cb(null, false, req.fileValidationError);
      }
    }
  },
});
