import UserModel from "../model/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'})
}

const getUser = async(req, res) => {
try {
        const user = await UserModel.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const safeUser = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            phoneNumber: user.phoneNumber,
            shippingAddress: user.shippingAddress
        };

        return res.json({ user: safeUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
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
        console.log('Login successful: ', token);
        return res.json({ message: 'Login successful', user: safeUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
}

//signup user
const registerUser = async(req, res) => {
    const { firstname, lastname, email, password, phoneNumber, shippingAddress } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const registerUser = new UserModel({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            profilePicture : "",
            phoneNumber,
            shippingAddress
        });

        const token = createToken(registerUser._id);
        const savedUser = await registerUser.save();
        const safeUser = {
            _id: savedUser._id,
            firstname: savedUser.firstname,
            lastname: savedUser.lastname,
            email: savedUser.email,
            role: savedUser.role,
            profilePicture: savedUser.profilePicture,
            phoneNumber: savedUser.phoneNumber,
            shippingAddress: savedUser.shippingAddress
        };

        return res.status(201).json({ user: safeUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

const editUser = async(req, res) => {
    const { userId } = req.params;
    const { firstname, lastname, email, phoneNumber, shippingAddress } = req.body;

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, {
            firstname,
            lastname,
            email,
            phoneNumber,
            shippingAddress
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error updating user', error: error.message });
    }
}

const changePassword = async(req, res) => {
    const { userId } = req.params;
    const { currentPassword, newPassword } = req.body;

    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();
        return res.json({ message: 'Password changed successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error changing password', error: error.message });
    }
}

export default {
    loginUser,
    registerUser,
    editUser,
    getUser,
    changePassword
}