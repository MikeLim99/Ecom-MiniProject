import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'products', // Cloudinary folder
    allowed_formats: ['jpg', 'png', 'webp'],
    public_id: (req, file) =>
      `product-${Date.now()}-${Math.round(Math.random() * 1e9)}`
  },
});

export const uploadProductImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});
