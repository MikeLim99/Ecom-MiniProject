import React from 'react'
import SideBar from '../component/semantics/SideBar'

function AdminLayout({children}) {
  return (
    <div className="admin-layout">
      <SideBar />
      <main>{children}</main>
    </div>
  )
}

export default AdminLayout