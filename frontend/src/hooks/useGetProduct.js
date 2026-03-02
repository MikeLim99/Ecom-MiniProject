import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useGetProduct = () => {
    const [products, setProducts] = useState([]);
    const [productById, setProductById] = useState(null);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/admin/getAllProducts');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    //get PRoduct by ID

    const getProductById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/admin/getProductById/${id}`);
            setProductById(response.data);
        } catch (error) {
            console.error("Error fetching product by ID: ", error);
        }
    }

    return { products, getAllProducts, getProductById, productById };
}