const routes = require("express").Router();

const messagesControllers = require("../controllers/MessageControllers");
const ConversationModel = require("../models/ConversationModel");

routes.post("/sendmessage/:id", messagesControllers.sendMessage);
routes.get("/readmessage/all/:id", messagesControllers.getMessage);
// Route: GET /conversations/:userId

routes.get("/conversations/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find conversations where the user is a participant
    const conversations = await ConversationModel.find({
      participants: { $in: [userId] },
    }).populate("participants");

    const data = await Promise.all(
      conversations.map(async (conv) => {
        const otherUser = conv.participants.find(
          (p) => p._id.toString() !== userId
        );

        // Find the latest message in this conversation
        const lastMessage = await MessageModel.findOne({
          _id: { $in: conv.messages },
        })
          .sort({ _id: -1 }) // Assuming ObjectId roughly reflects creation time
          .limit(1);

        return {
          conversationId: conv._id,
          otherUserId: otherUser?._id,
          otherUserName: otherUser?.name || "Unknown",
          lastMessage: lastMessage?.message || "No messages yet.",
        };
      })
    );

    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching conversations:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});
module.exports = routes;
