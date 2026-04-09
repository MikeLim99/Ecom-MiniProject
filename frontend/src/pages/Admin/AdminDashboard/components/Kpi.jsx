import React from 'react'

function Kpi() {
  return (
    <div className='flex w-full justify-around my-5'>
      <div className='basis-1/3 h-25 bg-highlight mx-10 rounded-lg flex flex-col justify-center items-center'>
        <div>
          Total Sales
        </div>
        <div>
          $100,000
        </div>
        <div>
          Jan - Feb 2026
        </div>
      </div>
      <div className='basis-1/3 h-25 bg-contrast mx-10 rounded-lg flex flex-col justify-center items-center'>
        <div>
          Total Customers
        </div>
        <div>
          1,000
        </div>
        <div>
          Jan - Feb 2026
        </div>
      </div>
      <div className='basis-1/3 h-25 bg-[#003F91] text-[#FFBE0B] mx-10 rounded-lg flex flex-col justify-center items-center'>
        <div>
          Total Orders
        </div>
        <div>
          100
        </div>
        <div>
          Jan - Feb 2026
        </div>
      </div>
    </div>
  )
}

export default Kpi