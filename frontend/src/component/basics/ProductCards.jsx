import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

function ProductCards() {
  return (
    <div className='w-[250px] h-[300px] bg-highlight-200 rounded-md shadow-md mx-auto pt-5 hover:scale-105 transition-transform duration-300'>
        <div className='w-[210px] h-[150px] bg-gray-200 rounded-md mx-auto'>
            img here
        </div>
        <div className='mx-auto w-[200px]'>
            <h1 className='text-[15px]'>AMD Ryzen 5 4650G</h1>
            <p className='text-[12px]'>reviews</p>
            <p className='text-[15px] text-contrast-200'><span className='line-through text-[#D9D9D9]'>$550.00</span> = $500.00</p>
        </div>
        <div className='mx-auto w-[200px] flex gap-1 justify-end mt-1'>
            <button className='bg-contrast-200 text-white p-2 rounded-md'>Buy Now</button>
            <button className='bg-contrast-200 text-white rounded-md flex items-center gap-1 p-2'><FiShoppingCart /><span>+</span></button>
        </div>
    </div>
  )
}

export default ProductCards