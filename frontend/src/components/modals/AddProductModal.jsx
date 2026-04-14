import React from "react";
import InputBox from "../basics/InputBox";
import { useAddProduct } from "../../hooks/useAddProduct";
import Button from "../basics/Button";
import SelectionBox from "../basics/SelectionBox";
import { Toaster } from "react-hot-toast";

function AddProductModal({ onClose, onChange, selectedFile }) {
  const { handleAddProduct, handleChange, formData } = useAddProduct();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">Add New Product</h2>
        <div><Toaster /></div>
        <form action="" onSubmit={handleAddProduct}>
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
            {formData.productImage ? formData.productImage.name : "No file selected"}
          </span>
        </div>
        <div className="flex gap-5">
          <InputBox label={"Product Name"} Name={"productName"} OnChange={handleChange} Value={formData.productName}/>
          <InputBox label={"Price"} Type="number" Name={"price"} OnChange={handleChange} Value={formData.price}/>
        </div>
        <div className="flex gap-5">
          <SelectionBox label={"Category"} name={"category"} onChange={handleChange} options={[
            { label: "Select Category", value: "" },
            { label: "Laptop", value: "laptop" },
            { label: "Phone", value: "phone" },
            { label: "Accessories", value: "accessories" },
            { label: "Desktop", value: "desktop" },
          ]} Value={formData.category}/>
          <InputBox label={"Stock"} Type="number" Name={"stock"} OnChange={handleChange} Value={formData.stock}/>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="productDescription"
          id="description"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Enter product description"
          onChange={handleChange}
          value={formData.productDescription}
        ></textarea>
        <div>
          <Button Title={"Add Product"} />
        </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
