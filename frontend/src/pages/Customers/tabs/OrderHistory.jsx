import React from 'react'
import { useAuthContext } from '../../../hooks/Auth/useAuthContext';

function OrderHistory() {
  const { user } = useAuthContext();
  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Order History</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full mb-5"></div>

      {/* Order History Content */}
      <div className='w-full'>
        <div className='border-b h-[150px] p-2 flex'>
          <div className="w-[250px] h-full bg-blue-300">img here</div>
          <div className='flex flex-col justify-between w-full p-2'>
            <div className='flex justify-between w-full'>
              <p>Ryzen 7 5600G</p>
              <p>Price : $500.00</p>
            </div>
            <div>
              <p>Ratings</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='border-b h-[150px] p-2 flex'>
          <div className="w-[250px] h-full bg-blue-300">img here</div>
          <div className='flex flex-col justify-between w-full p-2'>
            <div className='flex justify-between w-full'>
              <p>Ryzen 7 5600G</p>
              <p>Price : $500.00</p>
            </div>
            <div>
              <p>Ratings</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='border-b h-[150px] p-2 flex'>
          <div className="w-[250px] h-full bg-blue-300">img here</div>
          <div className='flex flex-col justify-between w-full p-2'>
            <div className='flex justify-between w-full'>
              <p>Ryzen 7 5600G</p>
              <p>Price : $500.00</p>
            </div>
            <div>
              <p>Ratings</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='border-b h-[150px] p-2 flex'>
          <div className="w-[250px] h-full bg-blue-300">img here</div>
          <div className='flex flex-col justify-between w-full p-2'>
            <div className='flex justify-between w-full'>
              <p>Ryzen 7 5600G</p>
              <p>Price : $500.00</p>
            </div>
            <div>
              <p>Ratings</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='border-b h-[150px] p-2 flex'>
          <div className="w-[250px] h-full bg-blue-300">img here</div>
          <div className='flex flex-col justify-between w-full p-2'>
            <div className='flex justify-between w-full'>
              <p>Ryzen 7 5600G</p>
              <p>Price : $500.00</p>
            </div>
            <div>
              <p>Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderHistory