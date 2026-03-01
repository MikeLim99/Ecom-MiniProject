import React, { useState } from 'react'
import InputBox from '../../component/basics/InputBox';

function AdminInventory() {
  const [ showAddProduct, setShowAddProduct ] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    
    <div className='flex flex-col w-full min-h-screen bg-white'>
      {/* Header */}
      <div className='bg-[#F8F7F9] h-20 flex items-center px-15 text-2xl'>
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
        <button className='bg-[#003F91] text-white px-8 h-12 rounded-lg' onClick={() => setShowAddProduct(true)}>
          Add Product
        </button>
      </div>
      {showAddProduct && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50' onClick={(e) => setShowAddProduct(false)}>
          <div className='bg-white p-6 rounded-lg w-200' onClick={(e) => e.stopPropagation()}>
            <h2 className='text-xl mb-4'>Add New Product</h2>
            <div className='flex items-center justify-center gap-3'>
              <input
                id='productImage'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              />
              <label
                htmlFor='productImage'
                className='cursor-pointer bg-[#003F91] text-white px-4 py-2 rounded-md hover:opacity-90'
              >
                Upload Image
              </label>
              <span className='text-sm text-gray-600'>
                {selectedFile ? selectedFile.name : 'No file selected'}
              </span>
            </div>
            <div className='flex gap-5'>
              <InputBox label={"Product Name"}/>
              <InputBox label={"Price"} Type='number'/>
            </div>
            <div className='flex gap-5'>
              <InputBox label={"Category"}/>
              <InputBox label={"Stock"} Type='number'/>
            </div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>Description</label>
            <textarea name="description" id="description" className='w-full p-2 border border-gray-300 rounded-md mb-4' placeholder='Enter product description'></textarea>
          </div>
        </div>
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
    <div className='mx-15 mt-5 border border-[#D9D9D9] rounded-xl h-[400px] overflow-auto'>
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
    {/* First Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>1</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>Yes</td>
                <td className='p-4'>$550.00</td>
                <td className='p-4'>$50.00</td>
                <td className='p-4'>300</td>
                <td className='p-4'>132</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Second Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>2</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>No</td>
                <td className='p-4'>$190.00</td>
                <td className='p-4'>$80.00</td>
                <td className='p-4'>281</td>
                <td className='p-4'>206</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Third Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>3</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>Yes</td>
                <td className='p-4'>$230.00</td>
                <td className='p-4'>$20.00</td>
                <td className='p-4'>149</td>
                <td className='p-4'>271</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Fourth Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>4</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>No</td>
                <td className='p-4'>$315.00</td>
                <td className='p-4'>$70.00</td>
                <td className='p-4'>290</td>
                <td className='p-4'>198</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Fifth Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>5</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>No</td>
                <td className='p-4'>$620.00</td>
                <td className='p-4'>$60.00</td>
                <td className='p-4'>160</td>
                <td className='p-4'>252</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Sixth Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>6</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>Yes</td>
                <td className='p-4'>$240.00</td>
                <td className='p-4'>$40.00</td>
                <td className='p-4'>70</td>
                <td className='p-4'>122</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Seventh Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>7</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>Yes</td>
                <td className='p-4'>$740.00</td>
                <td className='p-4'>$90.00</td>
                <td className='p-4'>280</td>
                <td className='p-4'>212</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
    {/* Eigth Row */}
              <tr className='text-center border-b border-[#D9D9D9]'>
                <td className='p-4'>8</td>
                <td className='p-4'>Ryzen 7 5600G</td>
                <td className='p-4'>Yes</td>
                <td className='p-4'>$590.00</td>
                <td className='p-4'>$100.00</td>
                <td className='p-4'>254</td>
                <td className='p-4'>199</td>
                <td className='p-4'>
                  <div className='flex items-center justify-center gap-3'>
    {/* Edit Button */}
                    <button>
                      <img src="/actionedit.png" className="w-6 h-6" alt="edit" />
                    </button>
                    
    {/* Delete Button */}
                    <button>
                      <img src="/recycle-bin.png" className="w-6 h-6" alt="edit" />
                    </button>
                  </div>
              </td>
              </tr>
        </tbody>
      
    {/* Tabs */}
    
      </table>
    </div>
  </div>
  )
}

export default AdminInventory