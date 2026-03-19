import React from 'react'
import { useGetOrders } from '../../../hooks/admin/orders/useGetOrder'

function Orders() {
    const { orders } = useGetOrders()
  return (
    <div>
      <div className='flex justify-center w-full'>
      <table className='w-[80%] border-collapse'>
        <thead className='border-b border-highlight-200'>
            <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order, index) => (
                <tr key={index} className='text-center border-b border-highlight-200'>
                    <td>{order._id}</td>
                    <td>{order.userId.firstname} {order.userId.lastname}</td>
                    <td>${order.totalPrice.toFixed(2)}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>{order.status}</td>
                    <td className='flex justify-center gap-4'>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded'>View</button>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded'>Edit</button>
                    </td>
                </tr>
                
            ))}
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default Orders