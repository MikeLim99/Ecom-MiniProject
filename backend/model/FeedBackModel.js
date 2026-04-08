import Mongoose from "mongoose";

const FeedBackSchema = new Mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

const FeedBackModel = Mongoose.model('FeedBack', FeedBackSchema);

export default FeedBackModel;