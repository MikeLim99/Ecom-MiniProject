import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { getImageUrl } from '../../../utils/getImageURLs';
import Button from '../../../components/basics/Button';
import { useGetProduct } from '../../../hooks/useGetProduct';
import { CartContext } from '../../../context/CartContext';
import toast, { Toaster } from "react-hot-toast";
import LoadingState from '../../../components/basics/LoadingState';


function ProductDetailsPage() {
    const { id } = useParams();
    const { getProductById, productById, loading, error } = useGetProduct();
    const { dispatch } = useContext(CartContext);
    const [showReview, setReview] = useState(false);
    const product = productById;
    const reviews = product?.reviews || [];
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id);
    }, [id, getProductById]);

    if (loading) {
        return <LoadingState message='Loading product details...' />
    }

    if (error) {
        return <div className='flex justify-center items-center h-[50vh]'><h1 className='text-2xl text-red-500'>{error}</h1></div>
    }
    
    if (!product) {
        return <div className='flex justify-center items-center h-[50vh]'><h1 className='text-2xl'>Product not found</h1></div>;
    }

    const handleAddToCart = (e, product, buyNow) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({type: 'ADD_TO_CART', payload: product})
        console.log("Product added to cart:", product);
        toast.success(`${product.productName} added to cart!`);
        if (buyNow) {
            navigate('/MyCart');
        }
    }

  return (
    <div className='flex justify-center gap-5 w-[80%] mx-auto py-10'>
        <div className='basis-1/4 bg-contrast rounded-md w-[300px] h-[300px]'>
            <img src={getImageUrl(product.productImage)} alt={product.productName} className='w-full h-full object-cover'/>
        </div>
        <Toaster />
        <div className='basis-2/4 bg-highlight-200 rounded-md w-[300px] h-[300px]'>
            <div className='border-b h-1/2 relative p-4 gap-1 flex flex-col border-gray-300'>
                <h1 className='text-[15px] font-bold'><span className="text-contrast">iTech</span> <span className="text-highlight">Store</span></h1>
                <h1 className=''>{product.productName}</h1>
                <p className='text-[13px]'>{reviews.length} review{reviews.length === 1 ? '' : 's'}</p>
                <p className='absolute bottom-0'>Stock : <span className='text-contrast-200'>Available</span></p>
            </div>
            <div className='p-4'>
                <p className='text-[20px] text-contrast-200'>${product.price.toFixed(2)}</p>
                <p className='line-through text-gray-300'>${product.discount.toFixed(2)}</p>
            </div>
            <div className='relative flex gap-5 justify-end mr-5 items-center'>
                <p className='absolute left-5'>Quantity</p>
                <Button Title={"Buy Now"} OnClick={(e) => handleAddToCart(e, product, true)}/>
                <Button ClassName={"bg-highlight"} Title={"Add to Cart"} OnClick={(e) => handleAddToCart(e, product, false)}/>
            </div>
        </div>
        <div className='basis-2/4 bg-highlight-200 rounded-md w-[300px] h-[300px]'>
            <div className='flex gap-10 w-full'>
                <button className='hover:border-b-3 p-5 border-highlight' onClick={() => setReview(false)}>Description</button>
                <button className='hover:border-b-3 p-5 border-highlight' onClick={() => setReview(true)}>Reviews ({reviews.length})</button>
            </div>
            {showReview ? (
            <div className='px-5 py-1 flex flex-col gap-2 overflow-y-auto h-[220px]'>
                <div>Reviews</div>
                {reviews.length === 0 ? (
                    <div className='border-b border-gray-300 pb-2'>
                        <div className='text-[13px] text-gray-500'>No reviews yet for this product.</div>
                    </div>
                ) : (
                    reviews.map((review, index) => {
                        const reviewerName = review?.userId?.firstname
                            ? `${review.userId.firstname} ${review?.userId?.lastname || ''}`.trim()
                            : 'Customer';

                        return (
                            <div className='border-b border-gray-300 pb-2' key={`${review?.userId?._id || review?.userId || 'review'}-${index}`}>
                                <div className='flex items-center justify-between'>
                                    <p className='text-[12px] font-semibold text-contrast'>{reviewerName}</p>
                                    <p className='text-[12px] text-highlight'>
                                        {'★'.repeat(review?.rating || 0)}
                                        {'☆'.repeat(5 - (review?.rating || 0))}
                                    </p>
                                </div>
                                <div className='text-[13px] text-gray-500'>{review?.comment || 'No comment provided.'}</div>
                            </div>
                        );
                    })
                )}
            </div>
            ):(
            <div className='px-5 py-1 flex flex-col gap-2 overflow-y-auto h-[220px]'>
                <div>Description</div>
                <div className='border-b border-gray-300'>
                <div className='text-[13px] text-gray-500'>{product.productDescription}</div>
                </div>
            </div>
            )
            }


        </div>
    </div>
  )
}

export default ProductDetailsPage