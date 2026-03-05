import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useGetProduct } from '../../hooks/useGetProduct';
import { Link } from 'react-router';
import { getImageUrl } from '../../utils/getImageURLs';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductCards() {
    const { products } = useGetProduct();
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'ADD_TO_CART', payload: product})
        console.log("Product added to cart:", product); 
    }
    
  return (
    <>
    {products.map((product) => (     
    <Link className='w-[250px] h-[300px] bg-highlight-200 rounded-md shadow-md mx-auto pt-5 hover:scale-105 transition-transform duration-300' key={product._id} to={`/product/${product._id}`} role='button'>
        <div className='w-[210px] h-[150px] bg-gray-200 rounded-md mx-auto'>
            <img src={getImageUrl(product.productImage)} alt={product.productName} className='w-full h-full object-contain'/>
        </div>
        <div className='mx-auto w-[200px]'>
            <h1 className='text-[15px]'>{product.productName}</h1>
            <p className='text-[12px]'>reviews</p>
            <p className='text-[15px] text-contrast-200'><span className='line-through text-[#D9D9D9]'>${product.discount.toFixed(2)}</span> = ${product.price.toFixed(2)}</p>
        </div>
        <div className='mx-auto w-[200px] flex gap-1 justify-end mt-1'>
            <button className='bg-contrast-200 text-white p-2 rounded-md'>Buy Now</button>
            <button
            onClick={(e) => handleAddToCart(e, product)}
            className='bg-contrast-200 text-white rounded-md flex items-center gap-1 p-2'><FiShoppingCart /><span>+</span></button>
        </div>
    </Link>
    ))}
    </>
  )
}

export default ProductCards