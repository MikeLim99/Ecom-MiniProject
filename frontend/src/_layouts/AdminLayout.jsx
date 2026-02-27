import React from 'react'
import SideBar from '../component/semantics/SideBar'

function AdminLayout({children}) {
  return (
    <div className="flex w-screen">
      <SideBar />
      <main className='w-full'>{children}</main>
    </div>
  )
}

export default AdminLayout