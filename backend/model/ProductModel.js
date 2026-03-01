import Mongoose from 'mongoose'

const ProductSchema = new Mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    category: {
        type: String,
        enum: ['laptop', 'phone', 'accessories', 'desktop'],
        required: true
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    productImage: {
        type: String
    }
}, { timestamps: true })

const ProductModel = Mongoose.model('Product', ProductSchema);

export default ProductModel