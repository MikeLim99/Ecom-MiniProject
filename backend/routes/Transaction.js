import express from 'express'
import requireAuth from '../middleware/requireAuth.js';
import { createTransaction, getAllTransactions, getTransactionsByUserId } from '../controller/TransactionController.js';

const router = express.Router();

router.post('/buy', createTransaction);

router.get('/transactions', getAllTransactions);

router.get('/transactions/me', requireAuth, getTransactionsByUserId);

export default router;