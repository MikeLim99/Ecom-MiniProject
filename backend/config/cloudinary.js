import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.CLOUD_API_KEY;
const apiSecret = process.env.CLOUD_API_SECRET;

if (!process.env.CLOUDINARY_URL && (!cloudName || !apiKey || !apiSecret)) {
  console.warn('Cloudinary environment variables are missing. Uploads will fail until configured.');
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

export default cloudinary;
