import UserModel from "../model/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'})
}

// login user
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = createToken(user._id);
        const safeUser = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture
        };
        return res.json({ message: 'Login successful', user: safeUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
}

//signup user
const registerUser = async(req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const registerUser = new UserModel({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            profilePicture : ""
        });

        const token = createToken(registerUser._id);
        const savedUser = await registerUser.save();
        const safeUser = {
            _id: savedUser._id,
            firstname: savedUser.firstname,
            lastname: savedUser.lastname,
            email: savedUser.email,
            role: savedUser.role,
            profilePicture: savedUser.profilePicture
        };

        return res.status(201).json({ user: safeUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

export default {
    loginUser,
    registerUser
}