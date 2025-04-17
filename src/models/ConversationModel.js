const mongoose = require("mongoose")
const conversationSchema = mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ride"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    }]
})
module.exports=mongoose.model("conversation",conversationSchema)