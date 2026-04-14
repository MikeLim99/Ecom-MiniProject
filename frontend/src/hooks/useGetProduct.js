import { useState } from "react";
import axiosClient from "../utils/axiosClient";

export const useGetProduct = () => {
    const [products, setProducts] = useState([]);
    const [productById, setProductById] = useState(null);



    const getAllProducts = async () => {
        try {
            const response = await axiosClient.get('/admin/getAllProducts');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    //get PRoduct by ID

    const getProductById = async (id) => {
        try {
            const response = await axiosClient.get(`/admin/getProductById/${id}`);
            setProductById(response.data);
        } catch (error) {
            console.error("Error fetching product by ID: ", error);
        }
    }

    return { products, getAllProducts, getProductById, productById };
}