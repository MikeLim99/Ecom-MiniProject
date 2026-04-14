import { useState } from "react";
import axiosClient from "../utils/axiosClient";


export const useEditProduct = (product) => {
    const [ formData, setFormData ] = useState({
        productName: product?.productName || "",
        productDescription: product?.productDescription || "",
        price: product?.price || 0,
        category: product?.category || "",
        discount: product?.discount || 0,
        stock: product?.stock || 0,
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

    const handleEditProduct = async(e, id, onSuccess) => {
        e.preventDefault();
        console.log("Form Data: ", formData);

        try {
            const response = await axiosClient.put(`/admin/editProduct/${id}`, formData)
            console.log('Product edited successfully: ', response.data);
            setFormData({
                productName: "",
                productDescription: "",
                price: "",
                category: "",
                discount: "",
                stock: "",
                productImage: null
            });

            if (onSuccess) onSuccess();
            
        } catch (error) {
            console.error("Error editing product:", error);
        }
    }
    return {
        formData,
        handleChange,
        handleEditProduct,
        setFormData
    }
}