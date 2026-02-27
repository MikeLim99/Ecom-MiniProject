import React from "react";
import { useAuthContext } from "../../../hooks/Auth/useAuthContext";

function MyAccount() {
    const { user } = useAuthContext();
  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Personal Info</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full"></div>

      {/* Right Card Content */}
      <div className="flex justify-center gap-5 mt-10">
        <div className="flex-col basis-1/2">
          <div className="font-xs">
            First Name <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            placeholder={user?.firstname}
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>
        <div className="flex-col basis-1/2">
          <div className="font-xs">
            Last Name <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            placeholder={user?.lastname}
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <div className="flex-col basis-1/2">
          <div className="font-xs">
            Email Address <span className="text-red-500">*</span>
          </div>
          <input
            type="email"
            placeholder={user?.email}
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>

        <div className="flex-col basis-1/2">
          <div className="font-xs">Phone Number</div>
          <input
            type="number"
            placeholder="Enter phone number"
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>
      </div>

      <div className="justify-center mt-10">
        <div className="flex flex-col w-[250px]">
          <div className="font-xs">Birth Date</div>
          <input
            type="date"
            className="h-10 w-full pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>
        <div className="flex flex-col mt-10 w-full">
          <div className="font-xs">
            Shipping Address <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            placeholder="Enter shipping address"
            className="h-10 w-full pl-2 border border-[#d9d9d9] rounded-md sm:w-["
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-8 justify-end mt-18">
        <div className="text-white rounded-md bg-[#003F91] py-3 px-8 cursor-pointer">
          Cancel
        </div>
        <div className="text-white rounded-md bg-[#003F91] py-3 px-8 cursor-pointer">
          Save Changes
        </div>
      </div>
    </>
  );
}

export default MyAccount;
