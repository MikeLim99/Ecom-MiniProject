import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { getImageUrl } from '../../../utils/getImageURLs';
import Button from '../../../component/basics/Button';
import { useGetProduct } from '../../../hooks/useGetProduct';
import { CartContext } from '../../../context/CartContext';
import toast, { Toaster } from "react-hot-toast";


function ProductDetailsPage() {
    const { id } = useParams();
    const { products } = useGetProduct();
    const { dispatch } = useContext(CartContext);

    const product = products.find((product) => product._id === id);

    if (!product) {
        return <div className='flex justify-center items-center h-[50vh]'><h1 className='text-2xl'>Product not found</h1></div>;
    }

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'ADD_TO_CART', payload: product})
        console.log("Product added to cart:", product);
        toast.success(`${product.productName} added to cart!`);
    }
  return (
    <div className='flex justify-center gap-5 w-[80%] mx-auto py-10'>
        <div className='basis-1/4 bg-contrast rounded-md w-[300px] h-[300px]'>
            <img src={getImageUrl(product.productImage)} alt={product.productName} className='w-full h-full object-contain'/>
        </div>
        <Toaster />
        <div className='basis-2/4 bg-highlight-200 rounded-md w-[300px] h-[300px]'>
            <div className='border-b h-1/2 relative p-4 gap-1 flex flex-col border-gray-300'>
                <h1 className='text-[15px] font-bold'><span className="text-contrast">iTech</span> <span className="text-highlight">Store</span></h1>
                <h1 className=''>{product.productName}</h1>
                <p className='text-[13px]'>reviews</p>
                <p className='absolute bottom-0'>Stock : <span className='text-contrast-200'>Available</span></p>
            </div>
            <div className='p-4'>
                <p className='text-[20px] text-contrast-200'>${product.price.toFixed(2)}</p>
                <p className='line-through text-gray-300'>${product.discount.toFixed(2)}</p>
            </div>
            <div className='relative flex gap-5 justify-end mr-5 items-center'>
                <p className='absolute left-5'>Quantity</p>
                <Button Title={"Buy Now"}/>
                <Button ClassName={"bg-highlight"} Title={"Add to Cart"} OnClick={(e) => handleAddToCart(e, product)}/>
            </div>
        </div>
        <div className='basis-2/4 bg-highlight-200 rounded-md w-[300px] h-[300px]'>
            <div className='flex gap-10 w-full'>
                <a href="#" className='hover:border-b-3 p-5 border-highlight' aria-current="page">Description</a>
                <a href="#" className='hover:border-b-3 p-5 border-highlight'>Reviews</a>
            </div>
            <div className='px-5 py-1 flex flex-col gap-2'>
                <div>Reviews</div>
                <div className='border-b border-gray-300'>
                <div className='text-[13px] text-gray-500'>User Name</div>
                <p className='text-[13px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <div className='text-[13px] text-gray-500'>Ratings : ⭐ ⭐ ⭐ ⭐ ⭐</div>
                </div>
                <div className='border-b border-gray-300'>
                <div className='text-[13px] text-gray-500'>User Name</div>
                <p className='text-[13px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <div className='text-[13px] text-gray-500'>Ratings : ⭐ ⭐ ⭐ ⭐ ⭐</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsPage