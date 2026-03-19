import TransactionModel from '../model/TransactionsModel.js';
import ProductModel from '../model/ProductModel.js';

export const createTransaction = async (req, res) => {
    const { userId, items } = req.body;

    try {
        const validatedItems = await Promise.all(items.map(async (item) => {
            const product = await ProductModel.findById(item.productId);
            if (!product) {
                throw new Error(`Product with ID ${item.productId} not found`);
            }
            return { ...item, unitPrice: product.price };
        }));
        const newTransaction = new TransactionModel({
            items: [
                ...validatedItems.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    linePrice: item.quantity * item.unitPrice
                }))
            ],
            totalPrice: validatedItems.reduce((total, item) => total + (item.quantity * item.unitPrice), 0),
            userId
        });
        await newTransaction.save();
        res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction});
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error: error.message });
    }
}

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await TransactionModel.find().populate('userId', 'firstname lastname');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error: error.message });
    }
}