import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = "uploads/products";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, `product-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
    },
});

const fileFilter = (_req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype))
        return cb(null, true);
    cb(new Error('Only JPEG, PNG, and WEBP images are allowed'));
};

export const uploadProductImage = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024}
});