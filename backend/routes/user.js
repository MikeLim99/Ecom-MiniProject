import express from 'express';
import userController from '../controller/userController.js';
import requireAuth from '../middleware/requireAuth.js';


const { loginUser, registerUser, editUser, getUser } = userController;

const router = express.Router();

//get user info
router.get('/getUser', requireAuth, getUser)

//login routes
router.post('/login', loginUser)

//register routes

router.post('/signup', registerUser)

//edit user routes
router.put('/UpdateInfo/:userId', editUser)

export default router;