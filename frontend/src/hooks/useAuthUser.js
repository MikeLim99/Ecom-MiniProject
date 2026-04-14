import { useState } from "react";
import axiosClient from "../utils/axiosClient.js";
import { useStateContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

export const useAuthUser = () => {
    const [ formData, setFormData ] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phoneNumber: '',
        shippingAddress: ''
    })
    const [ successLogin, setSuccessLogin ] = useState(false);

    const { setToken, setUser } = useStateContext();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/api/user/login', {
                ...formData
            })
            setToken(response.data.token);
            setUser(response.data.user);
            setSuccessLogin(true);
            console.log('Login successful: ', response.data);
            toast.success("Login successful!");
        } catch (error) {
            console.error('Error logging in:', error.message);
            toast.error("Error logging in. Please check your credentials and try again.");
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/api/user/signup', {
                ...formData
            });
            setToken(response.data.token);
            setUser(response.data.user);
            setSuccessLogin(true);
            toast.success("Registration successful!");
        } catch (error) {
            console.error('Error registering user:', error.message);
            toast.error("Error registering user. Please try again.");
        }
    }

    const handleUpdateUserInfo = async(e, id) => {
        e.preventDefault();
        try {
            const response = await axiosClient.put(`/api/user/UpdateInfo/${id}`, {
                ...formData
            });
                const updatedUser = response.data.user;
                setUser(updatedUser);
            console.log('User info updated successfully: ', response.data);
            toast.success("User info updated successfully!");
        } catch (error) {
            console.error('Error updating user info:', error.message);
            toast.error("Error updating user info. Please try again.");
        }
    }

        const handleUpdatePassword = async(e, id) => {
        e.preventDefault();
        try {
            const response = await axiosClient.put(`/api/user/changePassword/${id}`, {
                ...formData
            });
                const updatedUser = response.data.user;
                setUser(updatedUser);
            console.log('User info updated successfully: ', response.data);
            toast.success("User info updated successfully!");
        } catch (error) {
            console.error('Error updating user info:', error.message);
            toast.error("Error updating user info. Please try again.");
        }
    }

    const handleLogout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }
return { formData, setFormData, handleLogin, handleRegister, handleChange, handleLogout, successLogin, handleUpdateUserInfo, handleUpdatePassword };
}
