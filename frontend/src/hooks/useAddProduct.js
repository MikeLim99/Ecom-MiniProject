import axios from "axios";
import { useState } from "react";

export const useAddProduct = () => {
    const [ formData, setFormData ] = useState({
        productName: "",
        productDescription: "",
        price: 0,
        category: "",
        discount: 0,
        stock: 0,
        productImage: null
    });

    const handleChange = (e) => {

        const { name, value, type, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
            type === "file" ? files[0] : value
        }))
    }

        //     setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value,
        // });

    const handleAddProduct = async(e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
        try {
            const payLoad = new FormData();
            for (const key in formData) {
                payLoad.append(key, formData[key]);
            }
            const response = await axios.post('http://localhost:3000/admin/addProduct', payLoad)
            console.log('Product added successfully: ', response.data);
            setFormData({
                productName: "",
                productDescription: "",
                price: 0,
                category: "",
                discount: 0,
                stock: 0,
                productImage: null
            })
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }
    
    return {
        formData,
        handleChange,
        handleAddProduct,
        setFormData
    }
}