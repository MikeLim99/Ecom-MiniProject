import React from 'react'
import Kpi from './components/Kpi'
import SalesChart from './components/SalesChart'
import TopSoldProducts from './components/TopSoldProducts'

function AdminDashboard() {
  return (
    <>
    <div className='w-full h-20 bg-highlight-200 flex items-center p-10'>
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