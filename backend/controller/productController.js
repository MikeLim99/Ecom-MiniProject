import ProductModel from "../model/ProductModel.js";

// create/add product

const addProduct = async (req, res) => {
    const { productName, productDescription, price, category, discount, stock } = req.body;
    const productImage = req.file ? `/uploads/products/${req.file.filename}` : "";

    try {
        const newProduct = new ProductModel({
            productName,
            productDescription,
            price,
            category,
            discount,
            stock,
            productImage
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

    const { productName, productDescription, price, category, discount, stock } = req.body;
    const productImage = req.file ? `/uploads/products/${req.file.filename}` : "";

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {
            productName,
            productDescription,
            price,
            category,
            discount,
            stock,
            productImage
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
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//get product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default {
    addProduct,
    getAllProducts,
    getProductById,
    editProduct
};