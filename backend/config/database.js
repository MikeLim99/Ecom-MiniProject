import dotenv from 'dotenv';
import Mongoose from 'mongoose';
import dns from 'dns';

dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1'])

const URI = process.env.MONGO_URI;

export const ConnectDB = async() => {
    try {
        await Mongoose.connect(URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}