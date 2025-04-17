// {const { get } = require("mongoose");}
const Conversation = require("../models/ConversationModel");
const messageModel = require("../models/MessageModel");

const sendMessage = async (req, res) => {
  try {
    const { senderId, message } = req.body;
    const receiverId = req.params.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = await messageModel.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) conversation.messages.push(newMessage._id); //maybe

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({
      success: true,
      newMessage,
    });
  } catch (err) {
    console.log(err);
  }
};
const getMessage = async (req, res) => {
  try {
    const { senderId } = req.query.senderId;
    const receiverId = req.params.id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json({ success: true, messages: [] });
    }

    res.status(200).json({ success: true, messages: conversation.messages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  sendMessage,
  getMessage,
};
