import { useCallback, useState } from "react";
import axiosClient from "../utils/axiosClient";

const MIN_LOADING_TIME = 1000;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useGetProduct = () => {
    const [products, setProducts] = useState([]);
    const [productById, setProductById] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const getAllProducts = useCallback(async () => {
        const startedAt = Date.now();
        setLoading(true);
        setError(null);
        try {
            const response = await axiosClient.get('/admin/getAllProducts');
            setProducts(response.data);
        } catch (error) {
            setError(error?.response?.data?.message || 'Failed to fetch products.');
            console.error("Error fetching products: ", error);
        } finally {
            const elapsed = Date.now() - startedAt;
            if (elapsed < MIN_LOADING_TIME) {
                await wait(MIN_LOADING_TIME - elapsed);
            }
            setLoading(false);
        }
    }, []);

    //get PRoduct by ID

    const getProductById = useCallback(async (id) => {
        const startedAt = Date.now();
        setLoading(true);
        setError(null);
        setProductById(null);
        try {
            const response = await axiosClient.get(`/admin/getProductById/${id}`);
            setProductById(response.data);
        } catch (error) {
            setError(error?.response?.data?.message || 'Failed to fetch product.');
            console.error("Error fetching product by ID: ", error);
        } finally {
            const elapsed = Date.now() - startedAt;
            if (elapsed < MIN_LOADING_TIME) {
                await wait(MIN_LOADING_TIME - elapsed);
            }
            setLoading(false);
        }
    }, []);

    return { products, getAllProducts, getProductById, productById, loading, error };
}