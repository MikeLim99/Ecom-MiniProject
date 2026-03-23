import { useEffect, useState } from "react"
import axiosClient from "../../../utils/axiosClient";

export const useGetOrderHistory = (customerId) => {
    const [ orderHistory, setOrderHistory ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!customerId) {
            setOrderHistory([]);
            return;
        }

        getOrderHistory(customerId);
    }, [customerId]);

    const getOrderHistory = async(id = customerId) => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axiosClient.get(`/customer/transactions/transactions/${id}`);
            setOrderHistory(response.data);
        } catch (error) {
            console.error("Error fetching order history: ", error);
            setError(error.response?.data?.message || "Failed to fetch order history");
        } finally {
            setLoading(false);
        }
    }

    return { orderHistory, getOrderHistory, loading, error };
}