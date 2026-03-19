import { useContext, useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import axiosClient from "../utils/axiosClient";

export const AuthContext = createContext({
    user: null,
    setUser: () => {},
    token: null,
    setToken: () => {},
    authLoading: false
})

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('token'));
    const [authLoading, setAuthLoading] = useState(Boolean(localStorage.getItem('token')));

    const setToken = (newToken) => {
        _setToken(newToken);
        if(newToken){
            localStorage.setItem('token', newToken);
        }else {
            localStorage.removeItem('token');
            setUser(null);
        }
    }

    useEffect(() => {
        if (!token) {
            setAuthLoading(false);
            return;
        }

        setAuthLoading(true);

        axiosClient.get(`/api/user/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setUser(response.data.user);
        }).catch(error => {
            console.error('Error fetching user data: ', error);
            setToken(null);
        }).finally(() => {
            setAuthLoading(false);
        });
    }, [token])

    return (
        <AuthContext.Provider value = {{user, setUser, token, setToken, authLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useStateContext = () => useContext(AuthContext)