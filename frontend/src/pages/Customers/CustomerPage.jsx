import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/Auth/useAuthContext';
import OrderHistory from './tabs/OrderHistory';
import MyAccount from './tabs/MyAccount';
import RatingReviews from './tabs/RatingReviews';
import ChangePassword from './tabs/ChangePassword';

function CustomerPage() {
  const { user } = useAuthContext();
  const [activeTab, setActiveTab] = useState('MyAccount')

  const renderTabContent = () => {
    switch(activeTab) {
      case 'MyAccount':
        return <MyAccount />
      case 'OrderHistory':
        return <OrderHistory />
      case 'RatingReviews':
        return <RatingReviews />
      case 'ChangePassword':
        return <ChangePassword />
      default:
        return <MyAccount />
    }
  }

  const activeTabStyle = "pl-5 py-2 bg-[#003F91] text-white cursor-pointer"
  return (

    {/* Cards Container */},
    <div className='flex gap-8 pb-20'>

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
            <span className="font-bold text-[#003F91]">{user?.firstname} {user?.lastname}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-600">Badge:</span>
              <span className="bg-[#FFBE0B] text-white text-xs px-3 py-1 rounded-full">GOLD</span>
            </div>
          </div>
        </div>
      </div>

    {/* Navs */}
      <div className="flex flex-col pb-5 mt-6">
        <div className={activeTab === 'MyAccount' ? activeTabStyle : "pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer"} onClick={() => setActiveTab('MyAccount')}>My Account</div>
        <div className={activeTab === 'OrderHistory' ? activeTabStyle : "pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer"} onClick={() => setActiveTab('OrderHistory')}>Order History</div>
        <div className={activeTab === 'RatingReviews' ? activeTabStyle : "pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer"} onClick={() => setActiveTab('RatingReviews')}>Rating & Reviews</div>
        <div className={activeTab === 'ChangePassword' ? activeTabStyle : "pl-5 py-2 border-b border-[#D9D9D9] cursor-pointer"} onClick={() => setActiveTab('ChangePassword')}>Change Password</div>
      </div>

    {/* Log Out */}
      <div className="flex items-center gap-2 pl-5 text-yellow-600 cursor-pointer mt-20 pb-3">
        <img src="/logout.png" alt="logout" className="w-6 h-6" />
        <span className="text-lg text-black font-medium">Log Out</span>
      </div>
    </div>

    {/* Right Card Container */}
      <div className="w-[60%] h-[680px] mt-35 bg-[#F8F7F9] border border-[#D9D9D9] p-8 overflow-y-auto">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default CustomerPage
