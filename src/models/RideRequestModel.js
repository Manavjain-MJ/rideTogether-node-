const mongoose = require("mongoose")
const RideRequestSchema = mongoose.Schema({
    riderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ride"
    },
    pickupLocation:{
        type:String,
    },
    dropoffLocation:{
        type:String
    },
    ridestatus:{
        enum:["pending","accepted","canceled"],
        type:String
    }
},{
    timestamps:true
})
module.exports=mongoose.model("ride-request",RideRequestSchema)