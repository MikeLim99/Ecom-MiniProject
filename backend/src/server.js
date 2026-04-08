import Express from 'express';
import userRoutes from '../routes/user.js';
import adminProductRoutes from '../routes/Products.js';
import transactionRoutes from '../routes/Transaction.js';
import FeedbackRoutes from '../routes/FeedBack.js';
import { ConnectDB } from '../config/database.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const App = Express();

//middleware
App.use(Express.json());
App.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));

ConnectDB();

App.listen(3000, () => {
    console.log('Server is running on port 3000');
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

App.use("/uploads", Express.static(path.join(__dirname, "..", "uploads")));
//routes
App.use('/api/user', userRoutes);
App.use('/admin', adminProductRoutes);
App.use('/customer/transactions', transactionRoutes);
App.use('/feedback', FeedbackRoutes);
