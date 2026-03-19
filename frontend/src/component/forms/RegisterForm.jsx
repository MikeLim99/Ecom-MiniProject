import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAuthUser } from "../../hooks/useAuthUser";

function RegisterForm({ onClose, onSwitchToLogin }) {
  const { formData, handleRegister, handleChange } = useAuthUser();
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordMatched = formData.password === confirmPassword;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <AiOutlineClose />
          </button>
        </div>
        <h1 className="text-[30px] font-bold basis-1/4 text-center mb-2">
          <span className="text-contrast">iTech</span>{" "}
          <span className="text-highlight">Store</span>
        </h1>
        <h2 className="text-2xl font-bold text-contrast-200 text-center mb-10">
          Create Account
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shipping Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Enter your shipping address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Confirm password"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-contrast-200 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          <button
            type="submit"
            disabled={!passwordMatched}
            className="w-full bg-contrast-200 text-white py-2 rounded-md font-semibold hover:bg-contrast-300 transition disabled:opacity-50"
          >Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-contrast-200 hover:underline font-semibold cursor-pointer bg-none border-none p-0"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;