import React from 'react'
import SideBar from '../component/semantics/SideBar'

function AdminLayout({children}) {
  return (
    <div className="flex w-full">
      <SideBar />
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default AdminLayout