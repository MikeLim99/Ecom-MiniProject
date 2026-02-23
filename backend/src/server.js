import Express from 'express';
import userRoutes from '../routes/user.js';
import { ConnectDB } from '../config/database.js';
import cors from 'cors';

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

//routes
App.use('/api/user', userRoutes)
