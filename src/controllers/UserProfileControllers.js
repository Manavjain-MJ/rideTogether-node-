const multer = require("multer")
const userProfileModel = require("../models/UserProfileModel")
const cloudinaryUtil = require("../utils/CloudinaryUtils")

const getUserProfile = async(req,res)=>{
    try {
        const getProfile = await userProfileModel.findById(req.params.id).populate("userId")
        res.status(200).json({
            message:"User Profile Fetched Successfully",
            data:getProfile
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:err,
        })
    }

}

const updateUser = async(req,res)=>{
    try {
        const updatedUser = await userProfileModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(201).json({
            message:"User Updated Successfully",
            data:updateUser
        })
    } catch (err) {
        res.status(500).json({
            message:err.mes
        })
    }
} 


 module.exports={
    getUserProfile,
    updateUser
 }