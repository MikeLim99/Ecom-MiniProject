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
    }
}

export default {
    addProduct
};