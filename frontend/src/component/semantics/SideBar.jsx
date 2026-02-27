import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function SideBar() {
  return (
    <div className="group h-screen w-20 hover:w-[200px] bg-contrast-200 transition-all duration-300 overflow-hidden flex flex-col justify-center items-center">
      <ul className="pt-4 h-full flex flex-col gap-2">
        <li className="px-4 w-full py-2 font-medium whitespace-nowrap hover:bg-highlight text-white h-15 flex items-center">
          <span className="block group-hover:hidden text-white text-3xl"><MdOutlineSpaceDashboard /></span>
          <span className="hidden group-hover:block w-full">Dashboard</span>
        </li>
        <li className="px-4 w-full py-2 font-medium whitespace-nowrap hover:bg-highlight text-white h-15 flex items-center">
          <span className="block group-hover:hidden text-white text-3xl"><MdOutlineInventory2 /></span>
          <span className="hidden group-hover:block">Inventory</span>
        </li>
        <li className="px-4 w-full py-2 font-medium whitespace-nowrap hover:bg-highlight text-white h-15 flex items-center">
          <span className="block group-hover:hidden text-white text-3xl"><MdOutlineReviews /></span>
          <span className="hidden group-hover:block">Reviews & Feedback</span>
        </li>
        <li className="px-4 w-full py-2 font-medium whitespace-nowrap hover:bg-highlight text-white h-15 flex items-center">
          <span className="block group-hover:hidden text-white text-3xl"><TbLockPassword /></span>
          <span className="hidden group-hover:block">Account Password</span>
        </li>
        <li className="px-4 w-full py-2 font-medium whitespace-nowrap hover:bg-highlight mt-auto text-white h-15 flex items-center">
          <span className="block group-hover:hidden text-white text-3xl"><RiLogoutCircleLine /></span>
          <span className="hidden group-hover:block">Logout</span>
        </li>
      </ul>
    </div>
  )
}

export default SideBar