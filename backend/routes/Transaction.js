import express from 'express'
import requireAuth from '../middleware/requireAuth.js';
import { createTransaction } from '../controller/TransactionController.js';

const router = express.Router();

router.post('/buy', createTransaction);
export default router;