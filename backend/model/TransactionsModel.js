import Mongoose from 'mongoose'

const generateOrderId = () => {
    const randomPart = new Mongoose.Types.ObjectId().toString().slice(-6).toUpperCase();
    return `ORD-${randomPart}`;
}

const TransactionSchema = new Mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
        default: generateOrderId
    },
    userId : {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            productId: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            unitPrice: {
                type: Number,
                required: true,
                min: 0
            },
            linePrice: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });

const TransactionModel = Mongoose.model('Transaction', TransactionSchema);

export default TransactionModel