import express from 'express';
import userController from '../controller/userController.js';


const { loginUser, registerUser } = userController;

const router = express.Router();

//login routes
router.post('/login', loginUser)

//register routes

router.post('/signup', registerUser)

export default router;