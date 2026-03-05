import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./Auth/useAuthContext.js";

export const useAuthUser = () => {
    const [ formData, setFormData ] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const [ successLogin, setSuccessLogin ] = useState(false);

    const { dispatch } = useAuthContext();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/login', {
                ...formData
            })
            const authPayload = {
                ...response.data.user,
                token: response.data.token
            };
            localStorage.setItem('user', JSON.stringify(authPayload))
            dispatch({ type: 'LOGIN', payload: authPayload })
            setSuccessLogin(true);
            console.log('Login successful: ', response.data);
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/signup', {
                ...formData
            });
            console.log('Registration successful: ', response.data
            )
            const authPayload = {
                ...response.data.user,
                token: response.data.token
            };
            localStorage.setItem('user', JSON.stringify(authPayload))
            dispatch({ type: 'LOGIN', payload: authPayload })
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    }
return { formData, setFormData, handleLogin, handleRegister, handleChange, handleLogout, successLogin };
}
