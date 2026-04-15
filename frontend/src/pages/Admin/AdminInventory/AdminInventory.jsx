import React, { useEffect, useState } from 'react'
import Button from '../../../components/basics/Button';
import AddProductModal from '../../../components/modals/AddProductModal.jsx';
import { useGetProduct } from '../../../hooks/useGetProduct';
import EditProductModal from '../../../components/modals/EditProductModal';
import LoadingState from '../../../components/basics/LoadingState';

function AdminInventory() {
  const [ showAddProduct, setShowAddProduct ] = useState(false);
  const [ selectedFile, setSelectedFile ] = useState(null);
  const [ selectedProduct, setSelectedProduct ] = useState(null);
  const { products, getAllProducts, loading, error } = useGetProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='flex flex-col w-full h-screen bg-white'>
      {/* Header */}
      <div className='bg-[#F8F7F9] h-[150px] flex items-center px-15 text-2xl'>
        Inventory
      </div>

      <div className='bg-white flex flex-row items-center justify-between px-15 pt-5 w-full'>
      {/* Search */}
        <div className='flex items-center gap-5'>
          <span className='text-2xl'>Search :</span>
          <input 
            type='text'
            placeholder='Product Name, SKU'
            className='h-12 w-120 pl-4 rounded-md bg-[#F8F7F9] border border-[#D9D9D9]'
          />
        </div>

      {/* Button */}
        <Button Title={"Add Product"} OnClick={() => setShowAddProduct("AddProduct")}/>
      </div>
      {showAddProduct === "AddProduct" && (
        <AddProductModal
          onClose={() => setShowAddProduct(false)}
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          selectedFile={selectedFile}
        />
      )}
      {/* Stats */}
      <div className='px-15 pt-5 bg-white'>
        <div className='flex flex-row justify-between gap-15 bg-white'>
          
      {/* User Stat */}
      <div className='flex flex-1 h-25 bg-white'>
        <div className='bg-[#5DA9E9] w-25 rounded-l-xl flex items-center justify-center'>
          <img src="/people.png" className="w-20 h-20 mt-7" alt="icon" />
      </div>
      <div className='flex-1 bg-[#F8F7F9] border border-[#D9D9D9] border-l-0 rounded-r-xl flex flex-col items-center justify-center'>
        <span className='text-3xl'>5</span>
        <span className='text-lg text-black'>Users</span>
      </div>
      </div>

      {/* Categories Stat */}
      <div className='flex flex-1 h-25 bg-bg-white'>
        <div className='bg-[#5DA9E9] w-25 rounded-l-xl flex items-center justify-center'>
          <img src="/categorization.png" className="w-20 h-20" alt="icon" />
      </div>
      <div className='flex-1 bg-[#F8F7F9] border border-[#D9D9D9] border-l-0 rounded-r-xl flex flex-col items-center justify-center'>
        <span className='text-3xl'>5</span>
        <span className='text-lg text-black'>CATEGORIES</span>
      </div>
      </div>

      {/* Restock Stat */}
      <div className='flex flex-1 h-25 bg-white'>
        <div className='bg-[#5DA9E9] w-25 rounded-l-xl flex items-center justify-center'>
          <img src="/replacement.png" className="w-20 h-20" alt="icon" />
      </div>
      <div className='flex-1 bg-[#F8F7F9] border border-[#D9D9D9] border-l-0 rounded-r-xl flex flex-col items-center justify-center'>
        <span className='text-3xl'>5</span>
        <span className='text-lg text-black'>RESTOCK</span>
      </div>
      </div>

        </div>
      </div>
    
    {/* Stocks */}
    <div className='mx-15 border border-[#D9D9D9] rounded-xl h-screen overflow-auto my-10'>
        {loading ? (
          <LoadingState message='Loading inventory...' />
        ) : error ? (
          <div className='flex min-h-[240px] items-center justify-center text-sm text-red-500'>{error}</div>
        ) : (
      <table className='w-full text-left border-collapse'>
        <thead className='border-b border-[#D9D9D9]'>
          <tr>
            <th className='p-4 text-center'>ID</th>
            <th className='p-4 text-center'>Name</th>
            <th className='p-4 text-center'>Featured Display</th>
            <th className='p-4 text-center'>Price</th>
            <th className='p-4 text-center'>Discount</th>
            <th className='p-4 text-center'>Total Sold</th>
            <th className='p-4 text-center'>Stock Left</th>
            <th className='p-4 text-center'>Actions</th>
          </tr>
        </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id} className='text-center border-b border-[#D9D9D9]'>
                  <td className='p-4'>{index + 1}</td>
                  <td className='p-4'>{product.productName}</td>
                  <td className='p-4'>{product.featured ? "Yes" : "No"}</td>
                  <td className='p-4'>${product.price}</td>
                <td className='p-4'>${product.discount}</td>
                <td className='p-4'>300</td>
                <td className='p-4'>{product.stock}</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button onClick={() => {setShowAddProduct("EditProduct"); setSelectedProduct(product);}}>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    {showAddProduct === "EditProduct" && (
                      <EditProductModal
                        onClose={() => setShowAddProduct(false)}
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        selectedFile={selectedFile}
                        product={selectedProduct}
                        onSuccess={() => {
                          getAllProducts();
                          setShowAddProduct(false);
                        }}
                      />
                    )}
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
              ))}
        </tbody>
    {/* Tabs */}
      </table>
      )}
    </div>
  </div>
  )
}

export default AdminInventory