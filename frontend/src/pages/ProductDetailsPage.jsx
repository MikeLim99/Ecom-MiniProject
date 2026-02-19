import React from 'react'
import Button from '../component/basics/Button'

function ProductDetailsPage() {
  return (
    <div className='flex justify-center gap-5 w-[80%] mx-auto py-10'>
        <div className='basis-1/4 bg-contrast rounded-md w-[300px] h-[300px]'>
            img here
        </div>
        <div className='basis-2/4 bg-highlight-200 rounded-md w-[300px] h-[300px]'>
            <div className='border-b h-1/2 relative p-4 gap-1 flex flex-col border-gray-300'>
                <h1 className='text-[15px] font-bold'><span className="text-contrast">iTech</span> <span className="text-highlight">Store</span></h1>
                <h1 className=''>Ryzen 7 5700G</h1>
                <p className='text-[13px]'>reviews</p>
                <p className='absolute bottom-0'>Stock : <span className='text-contrast-200'>Available</span></p>
            </div>
            <div className='p-4'>
                <p className='text-[20px] text-contrast-200'>$550.00</p>
                <p className='line-through text-gray-300'>$500.00</p>
            </div>
            <div className='relative flex gap-5 justify-end mr-5 items-center'>
                <p className='absolute left-5'>Quantity</p>
                <Button Title={"Buy Now"}/>
                <Button ClassName={"bg-highlight"} Title={"Add to Cart"}/>
            </div>
        </div>
        <div className='basis-2/4 bg-highlight-200 rounded-md w-[300px] h-[300px]'>
            <div className='flex gap-10 w-full'>
                <a href="#" className='hover:border-b-3 p-5 border-highlight' aria-current="page">Description</a>
                <a href="#" className='hover:border-b-3 p-5 border-highlight'>Reviews</a>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsPage