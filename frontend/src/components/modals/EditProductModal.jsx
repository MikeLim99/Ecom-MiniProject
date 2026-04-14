import React from "react";
import InputBox from "../basics/InputBox";
import Button from "../basics/Button";
import SelectionBox from "../basics/SelectionBox";
import { Toaster } from "react-hot-toast";
import { useEditProduct } from "../../hooks/useEditProduct";

function EditProductModal({ onClose, onChange, selectedFile, product, onSuccess }) {
  const { handleEditProduct, handleChange, formData, setFormData } = useEditProduct(product);

  return (
    <div
      className="fixed inset-0 bg-black/10 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">Edit Product</h2>
        <div><Toaster /></div>
        <form onSubmit={(e) => handleEditProduct(e, product._id, onSuccess)}>
        <div className="flex items-center justify-center gap-3">
          <input
            id="productImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
            name="productImage"
          />
          <label
            htmlFor="productImage"
            className="cursor-pointer bg-[#003F91] text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            Upload Image
          </label>
          <span className="text-sm text-gray-600">
            {product.productImage ? product.productImage.name : "No file selected"}
          </span>
        </div>
        <div className="flex gap-5">
          <InputBox label={"Product Name"} Name={"productName"} OnChange={handleChange} Value={formData.productName || product.productName}/>
          <InputBox label={"Price"} Type="number" Name={"price"} OnChange={handleChange} Value={formData.price !== undefined ? formData.price : product?.price}/>
        </div>
        <div className="flex gap-5">
          <SelectionBox label={"Category"} name={"category"} onChange={handleChange} options={[
            { label: `${product.category || "Select Category"}`, value: product.category || "" },
            { label: "Laptop", value: "laptop" },
            { label: "Phone", value: "phone" },
            { label: "Accessories", value: "accessories" },
            { label: "Desktop", value: "desktop" },
          ]} Value={product.category || product?.category}/>
          <InputBox label={"Stock"} Type="number" Name={"stock"} OnChange={handleChange} Value={formData.stock !== undefined ? formData.stock : product?.stock}/>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="productDescription"
          id="productDescription"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter product description"
          onChange={handleChange}
          value={formData.productDescription || product?.productDescription}
        ></textarea>
        <div>
          <Button Title={"Edit Product"} />
        </div>
        </form>
      </div>
    </div>
  );
}

export default EditProductModal;
