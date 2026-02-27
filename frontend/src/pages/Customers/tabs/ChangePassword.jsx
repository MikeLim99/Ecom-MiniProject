import React from "react";
import { useAuthContext } from "../../../hooks/Auth/useAuthContext";
import Button from "../../../component/basics/Button";

function ChangePassword() {
    const { user } = useAuthContext();
  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Change Password</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full"></div>

      {/* Right Card Content */}
      <div className="py-10 w-[80%] mx-auto flex flex-col gap-5">
        <div>
            <label className="block text-sm font-medium text-gray-700">Current Password<span className="text-red-500">*</span></label>
            <input type="password" placeholder="Current Password" className="h-10 w-full pl-2 border border-[#d9d9d9] rounded-md w-full" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">New Password<span className="text-red-500">*</span></label>
            <input type="password" placeholder="New Password" className="h-10 w-full pl-2 border border-[#d9d9d9] rounded-md w-full" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password<span className="text-red-500">*</span></label>
            <input type="password" placeholder="Confirm New Password" className="h-10 w-full pl-2 border border-[#d9d9d9] rounded-md w-full" />
        </div>
        <Button Title={"Change Password"} ClassName={"w-fit bg-[#003F91] text-white hover:bg-[#002a66]"} />
      </div>
      
    </>
  );
}

export default ChangePassword;
