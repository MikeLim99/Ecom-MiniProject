import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    profilePicture: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
    }
})

const UserModel = Mongoose.model('User', UserSchema);

export default UserModel;