const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ride",
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ride",
  },
  message:{
    type:String,
    require:true
  }
});
module.exports=mongoose.model("message",messageSchema)
