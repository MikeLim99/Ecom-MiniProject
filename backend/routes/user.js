import express from 'express';
import userController from '../controller/userController.js';
import requireAuth from '../middleware/requireAuth.js';


const { loginUser, registerUser, editUser, getUser, changePassword } = userController;

const router = express.Router();

//get user info
router.get('/getUser', requireAuth, getUser)

//login routes
router.post('/login', loginUser)

//register routes

router.post('/signup', registerUser)

//edit user routes
router.put('/UpdateInfo/:userId', editUser)

//change password route
router.put('/changePassword/:userId', changePassword)

export default router;