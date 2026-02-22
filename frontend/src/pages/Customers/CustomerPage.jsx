import React from 'react'

function CustomerSidebar() {
  return (

    {/* Cards Container */},
    <div className='flex gap-8'>

    {/* Left Card Container */}
    <div className="ml-55 w-[15%] h-[45%] bg-[#F8F7F9] flex flex-col border border-[#D9D9D9] mt-35">
      <div className="pt-10 px-5">
        <div className="flex items-center gap-4">

    {/* Image Container */}
          <div className="relative">
            <img 
              src="/user.png" 
              alt="profile" 
              className="w-16 h-16 rounded-full object-cover cursor-pointer"
            />

    {/* Edit Image Container */}
            <img 
              src="/edit.png" 
              alt="edit" 
              className="absolute top-0 right-0 w-5 h-5 rounded-full bg-[#FFBE0B] text-xs cursor-pointer"
            />
          </div>

    {/* Left Card Info */}
          <div className="flex flex-col">
            <span className="font-bold text-[#003F91]">Michael Angelo Lim</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-600">Badge:</span>
              <span className="bg-[#FFBE0B] text-white text-xs px-3 py-1 rounded-full">GOLD</span>
            </div>
          </div>
        </div>
      </div>

    {/* Navs */}
      <div className="flex flex-col pb-5 mt-6">
        <div className="pl-5 py-2 bg-[#003F91] text-white cursor-pointer">My Account</div>
        <div className="pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer">Order History</div>
        <div className="pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer">Rating & Reviews</div>
        <div className="pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer">Change Password</div>
        <div className="pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer">Settings</div>
      </div>

    {/* Log Out */}
      <div className="flex items-center gap-2 pl-5 text-yellow-600 cursor-pointer mt-20 pb-3">
        <img src="/logout.png" alt="logout" className="w-6 h-6" />
        <span className="text-lg text-black font-medium">Log Out</span>
      </div>
    </div>

    {/* Right Card Container */}
      <div className="w-[60%] h-[580px] mt-35 bg-[#F8F7F9] border border-[#D9D9D9] p-8">
        <div className='flex items-center gap-1'>

    {/* Right Card Header Content */}
          <div className="h-8 w-2 bg-[#FFBE0B]"></div>
          <h1 className="text-3xl font-bold text-[#003F91]">Personal Info</h1>
        </div>
        <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full"></div>

    {/* Right Card Content */}
      <div className='flex justify-center gap-5 mt-10'>
        <div className='flex-col'>
        <div className='font-xs'>Full Name <span className='text-red-500'>*</span></div>
        <input 
          type='text'
          placeholder='Enter full name'
          className='h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md'/>
        </div>
        <div className='flex-col'>
        <div className='font-xs'>Phone Number <span className='text-red-500'>*</span></div>
        <input 
          type='number'
          placeholder='Enter phone number'
          className='h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md'/>
        </div>
      </div>

      <div className='flex justify-center gap-5 mt-10'>
        <div className='flex-col'>
        <div className='font-xs'>Email Address <span className='text-red-500'>*</span></div>
        <input 
          type='email'
          placeholder='Enter your email' 
          className='h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md'/>
      </div>
        <div className='flex-col'>
        <div className='font-xs'>Birth Date</div>
        <input 
          type='date'
          className='h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md'/>
        </div> 
      </div>

      <div className='flex justify-center mt-10'>
        <div className='flex flex-col w-[860px]'>
        <div className='font-xs'>Shipping Address <span className='text-red-500'>*</span></div>
        <input 
          type='text'
          placeholder='Enter shipping address'
          className='h-10 w-full pl-2 border border-[#d9d9d9] rounded-md'/>
        </div>
      </div>
      <div className='flex flex-row items-center gap-8 justify-end pr-24 mt-18'>
        <div className='text-white rounded-md bg-[#003F91] py-3 px-8 cursor-pointer'>Cancel</div>
        <div className='text-white rounded-md bg-[#003F91] py-3 px-8 cursor-pointer'>Save Changes</div>
      </div>

      </div>
    </div>
  )
}

export default CustomerSidebar
