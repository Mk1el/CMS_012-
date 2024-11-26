import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        reqiure: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    location:{
        type: String,
        require: true
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})
const ContactModel = mongoose.model("contact", ContactSchema)
export {ContactModel}