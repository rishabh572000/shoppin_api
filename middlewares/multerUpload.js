const multer = require("multer");
var path = require("path");

let user_profile_stroage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

var userProfile = multer({
  storage: user_profile_stroage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      return cb(
        {
          message: `Only .jpg .png and .jpeg are allowed.`,
          status: 422,
        },
        false
      );
    }
  },
});

module.exports = {
  userProfile
};
