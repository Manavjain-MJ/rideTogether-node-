const multer = require("multer");
const path = require("path");
const userProfileModel = require("../models/UserProfileModel");
const cloudinaryUtil = require("../utils/CloudinaryUtils");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); 
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("profile");

const updateUser = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No images uploaded" });
      }

      const uploadedImage = await cloudinaryUtil.uploadFileToCloudinary(
        req.file.path
      );

      req.body.profilePicture = uploadedImage.secure_url;

      //   console.log(req.body);
      //   req}.body.profilePicture = profileUrls;
      const updatedUser = await userProfileModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(201).json({
        message: "User Updated Successfully",
        data: updatedUser,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  });
};

const getUserProfile = async (req, res) => {
  try {
    const getProfile = await userProfileModel
      .findOne({userId:req.params.id})
      .populate("userId");
    res.status(200).json({
      message: "User Profile Fetched Successfully",
      data: getProfile,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err,
    });
  }
};

module.exports = {
  getUserProfile,
  updateUser,
};
