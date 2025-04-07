const liveRideModel = require("../models/LiveRideModel")


const addLiveRide = async(req,res)=>{


    try {
        const savedLiveRides = await liveRideModel.create(req.body)
        res.status(201).json({
            message:"Ride is Successfully Live",
            data:savedLiveRides
        })
    } catch (err) {
        res.status(500).json({
            message:err.message,
        })
    }


}
const getAllLiveRide = async(req,res)=>{

    try {
        
        const allLiveRide = await liveRideModel.find().populate("driverId")
        res.status(200).json({
            message:"All Live Rides Fetched Successfully",
            data:allLiveRide
        })
    } catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}

const getLiveRideById = async(req,res)=>{
    try {
        const liveRideById = await liveRideModel.findById(req.params.id).populate("driverId vehicleId")
        res.status(200).json({
            message:"Ride Fetched By Id Successfully",
            data:liveRideById
        })
    } catch (err) {
        res.status(500).json({
            message:err.message
        })
    }
}
module.exports={
    addLiveRide,
    getAllLiveRide,
    getLiveRideById
}