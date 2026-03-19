import { useEffect } from "react"
import { useState } from "react"
import axiosClient from "../../../utils/axiosClient"

export const useGetOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getAllOrders()
    }, [])

    const getAllOrders = async() => {
        try {
            const response = await axiosClient.get('/customer/transactions/transactions');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching transactions: ', error);
        }
    }

    return { orders, getAllOrders }
}