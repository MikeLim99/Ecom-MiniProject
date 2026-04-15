import ProductModel from "../model/ProductModel.js";

// create/add product

const addProduct = async (req, res) => {
    const { productName, productDescription, price, category, discount, stock, featuredDisplay } = req.body;
    const productImage = req.file?.path || "";

    try {
        const newProduct = new ProductModel({
            productName,
            productDescription,
            price,
            category,
            discount,
            stock,
            productImage,
            featuredDisplay
        })

        const savedProduct = await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: savedProduct });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error("Error adding product: ", error);
    }
}

//edit product

const editProduct = async (req, res) => {
    const {id} = req.params;

    const { productName, productDescription, price, category, discount, stock, featuredDisplay } = req.body;
    const updates = {
        productName,
        productDescription,
        price,
        category,
        discount,
        stock,
        featuredDisplay
    };

    if (req.file?.path) {
        updates.productImage = req.file.path;
    }

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        })
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find().sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//get product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await ProductModel.findById(id).populate('reviews.userId', 'firstname lastname');
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function postReview(req, res){
    const { userId, comment, rating } = req.body;
    const { id } = req.params;

    try {
        const productToReview = await ProductModel.findById(id);
        if(!productToReview) {
            return res.status(404).json({ error: 'Product not found' });
        }
        productToReview.reviews.push({ userId, comment, rating });
        await productToReview.save();

        res.status(200).json({ message: 'Review posted successfully', review: { userId, comment, rating } });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error posting review: ", error);
    }
}

export default {
    addProduct,
    getAllProducts,
    getProductById,
    editProduct,
    postReview
};