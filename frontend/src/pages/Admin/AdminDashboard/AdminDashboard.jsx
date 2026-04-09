import React from 'react'
import Kpi from './components/Kpi'
import SalesChart from './components/SalesChart'
import TopSoldProducts from './components/TopSoldProducts'

function AdminDashboard() {
  return (
    <>
    <div className='bg-[#F8F7F9] h-[93px] flex items-center px-15 text-[22px]'>
        Dashboard
    </div>
    <div className='flex'>
        {/* KPIs and charts */}
        <div className='basis-3/5 h-25 flex flex-col'>
            {/* KPIs */}
            <div>
            <Kpi />
            </div>
            {/* charts */}
            <div>
            <SalesChart />
            </div>
        </div>
        {/* Top Sold Products */}
        <div className='basis-2/5'>
            <TopSoldProducts />
        </div>
    </div>
    </>
  )
}

export default AdminDashboard