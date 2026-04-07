import express from 'express'
import productController from '../controller/productController.js';
import requireAuth from '../middleware/requireAuth.js';
import { uploadProductImage } from '../middleware/uploadProductImage.js';

const { addProduct, getAllProducts, getProductById, editProduct, postReview } = productController;

const router = express.Router();

router.post('/addProduct', uploadProductImage.single('productImage'), addProduct)
router.put('/editProduct/:id', uploadProductImage.single('productImage'), editProduct)
router.get('/getAllProducts', getAllProducts)
router.get('/getProductById/:id', getProductById)
router.post('/postReview/:id', postReview)

export default router;