import mongoose, {Schema } from "mongoose";

const userSchema = new Schema({
    user_id :{
        type:String,
        unique:true,
        required:true,
        index: true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    logo:{
        type:String
    },
    password:{
        type:String,
        required:true,
    },
    rooms: [{ 
        type: Schema.Types.ObjectId, 
        ref: "Room" 
    }],
})

export const User = mongoose.model("User",userSchema)