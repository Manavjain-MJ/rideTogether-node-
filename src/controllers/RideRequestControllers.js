const rideRequestModel = require("../models/RideRequestModel")

const addRideRequest=async(req,res)=>{
    try {
        const savedRideRequest =await rideRequestModel.create(req.body)
        res.status(201).json({
            message:"Ride Request Added Successfully",
            data:savedRideRequest
        })
        
    } catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}
const getAllRideRequest = async(req,res)=>{
    try {
        const getRideRequest = await rideRequestModel.find().populate("riderId")
        res.status(201).json({
            message:"All Ride Requests Fetched Succesfully",
            data:getRideRequest
        })
    } catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}
module.exports={
    addRideRequest,
    getAllRideRequest
}