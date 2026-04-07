import React from 'react'
import { useAuthContext } from '../../../hooks/Auth/useAuthContext';
import { useGetOrderHistory } from '../../../hooks/customer/OrderHistory/useGetOrderHistory';
import { getImageUrl } from '../../../utils/getImageURLs';

function OrderHistory() {
  const { user } = useAuthContext();
  const customerId = user?._id || null;
  const { orderHistory, loading, error } = useGetOrderHistory(customerId);

  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Order History</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full mb-5"></div>

      {/* Order History Content */}
      {loading && <p>Loading order history...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {!loading && !error && orderHistory.length === 0 && <p>No order history found.</p>}

      {!loading && !error && orderHistory.map((order) => (
        <div className='w-full'>
        <div className='border-b h-[150px] p-2 flex'>
          <div className="w-[250px] h-full">
            {order?.items?.[0]?.productId?.productImage ? (
              <img
                src={getImageUrl(order.items[0].productId.productImage)}
                alt={order?.items?.[0]?.productId?.productName || 'Product'}
                className='w-full h-full object-contain'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center text-xs text-gray-600'>
                No image
              </div>
            )}
          </div>
          <div className='flex flex-col justify-between w-full p-2'>
            <div className='flex justify-between w-full'>
              <p>Order ID: {order.orderId}</p>
              <p>Product Name: {order.items[0]?.productId?.productName || 'No Name Available'}</p>
              <p>Price : ${order.totalPrice.toFixed(2)}</p>
            </div>
            <div>
              <p>Status: {order.status}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
      
    </>
  )
}

export default OrderHistory