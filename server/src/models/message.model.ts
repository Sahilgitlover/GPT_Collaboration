import mongoose, { Schema } from "mongoose";

const MessageSender = {
	USER: 0,
	AI: 1,
	ADMIN: 2,
};

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.Mixed,
    required: true,
  },
  senderType: {
    type: Number,
    enum: Object.values(MessageSender),
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Message = mongoose.model("Message", messageSchema);
