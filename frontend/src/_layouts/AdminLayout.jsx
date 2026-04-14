import React from 'react'
import SideBar from '../components/semantics/SideBar'

function AdminLayout({children}) {
  return (
    <div className="flex w-full">
      <SideBar />
      <main className='w-full'>{children}</main>
    </div>
  )
}

export default AdminLayout