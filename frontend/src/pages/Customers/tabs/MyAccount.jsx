import React from "react";
import { useAuthContext } from "../../../hooks/Auth/useAuthContext";
import { useAuthUser } from "../../../hooks/useAuthUser";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function MyAccount() {
  const { formData, handleUpdateUserInfo, handleChange, setFormData } = useAuthUser();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;
    setFormData({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      shippingAddress: user.shippingAddress
    });
  }, [user, setFormData])
  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Personal Info</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full"></div>
      <form onSubmit={(e) => handleUpdateUserInfo(e, user._id)}>
      {/* Right Card Content */}
      <Toaster />
      <div className="flex justify-center gap-5 mt-10">
        <div className="flex-col basis-1/2">
          <div className="font-xs">
            First Name <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>
        <div className="flex-col basis-1/2">
          <div className="font-xs">
            Last Name <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>

        <div className="flex-col basis-1/2">
          <div className="font-xs">Phone Number</div>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
        </div>
      </div>

      <div className="justify-center mt-10">
        <div className="flex flex-col mt-10 w-full">
          <div className="font-xs">
            Shipping Address <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="h-10 w-full pl-2 border border-[#d9d9d9] rounded-md sm:w-["
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-8 justify-end mt-18">
        <div className="text-white rounded-md bg-[#003F91] py-3 px-8 cursor-pointer">
          Cancel
        </div>
        <button className="text-white rounded-md bg-[#003F91] py-3 px-8 cursor-pointer" type="submit">
          Save Changes
        </button>
      </div>
      </form>
    </>
  );
}

export default MyAccount;
