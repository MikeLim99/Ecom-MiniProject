import React, { useEffect } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useGetProduct } from '../../hooks/useGetProduct';
import { Link, useNavigate } from 'react-router';
import { getImageUrl } from '../../utils/getImageURLs';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductCards({ featuredOnly = false, category = '' }) {
    const { products, getAllProducts } = useGetProduct();
    const { dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts])

    const handleAddToCart = (e, product, buyNow) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'ADD_TO_CART', payload: product})
        console.log("Product added to cart:", product);
        if (buyNow) {
            navigate('/MyCart');
        }
    }

    const displayedProducts = products.filter((product) => {
        if (featuredOnly && !product.featuredDisplay) {
            return false;
        }

        if (category && product.category !== category) {
            return false;
        }

        return true;
    });
    
  return (
    <>
    {displayedProducts.map((product) => (
    <Link className='w-[250px] h-[300px] bg-highlight-200 rounded-md shadow-md mx-auto pt-5 hover:scale-105 transition-transform duration-300' key={product._id} to={`/product/${product._id}`} role='button'>
        <div className='w-[210px] h-[150px] rounded-md mx-auto'>
            <img src={getImageUrl(`/uploads/${product.productImage}`)} alt={product.productName} className='w-full h-full object-contain'/>
        </div>
        <div className='mx-auto w-[200px]'>
            <h1 className='text-[15px]'>{product.productName}</h1>
            <p className='text-[12px]'>reviews ({product.reviews?.length || 0})</p>
            <p className='text-[15px] text-contrast-200'><span className='line-through text-[#D9D9D9]'>${product.discount.toFixed(2)}</span> = ${product.price.toFixed(2)}</p>
        </div>
        <div className='mx-auto w-[200px] flex gap-1 justify-end mt-1'>
            <button className='bg-contrast-200 text-white p-2 rounded-md' onClick={(e) => handleAddToCart(e, product, true)}>Buy Now</button>
            <button
            onClick={(e) => handleAddToCart(e, product, false)}
            className='bg-contrast-200 text-white rounded-md flex items-center gap-1 p-2'><FiShoppingCart /><span>+</span></button>
        </div>
    </Link>
    ))}
    </>
  )
}

export default ProductCards