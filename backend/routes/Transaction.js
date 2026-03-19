import express from 'express'
import requireAuth from '../middleware/requireAuth.js';
import { createTransaction, getAllTransactions } from '../controller/TransactionController.js';

const router = express.Router();

router.post('/buy', createTransaction);

router.get('/transactions', getAllTransactions);

export default router;