import { useEffect, useState } from "react"
import axiosClient from "../../../utils/axiosClient";
import { useAuthContext } from "../../Auth/useAuthContext";

export const useGetOrderHistory = (customerId) => {
    const [ orderHistory, setOrderHistory ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useAuthContext();

    useEffect(() => {
        if (!customerId) {
            setOrderHistory([]);
            return;
        }

        getOrderHistory(customerId);
    }, [customerId, token]);

    const getOrderHistory = async(id = customerId) => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axiosClient.get('/customer/transactions/transactions/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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