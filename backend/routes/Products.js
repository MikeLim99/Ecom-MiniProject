import express from 'express'
import productController from '../controller/productController.js';
import requireAuth from '../middleware/requireAuth.js';
import { uploadProductImage } from '../middleware/uploadProductImage.js';

const { addProduct } = productController;

const router = express.Router();

router.post('/addProduct', uploadProductImage.single('productImage'), addProduct)

export default router;