import mongoose, { Schema } from "mongoose";

const RoomAccess = {
  READ: 0,
  WRITE: 1,
  ADMIN: 2,
};

const roomSchema = new Schema({
  room_id: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User" },
      access: { type: Number, enum: Object.values(RoomAccess), required: true },
    },
  ],
  chat_history: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

export const Room = mongoose.model("Room", roomSchema);
