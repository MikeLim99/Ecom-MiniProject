import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAuthUser } from "../../hooks/useAuthUser";

function LoginForm({ onClose, onSwitchToRegister }) {
  const { formData, handleLogin, handleChange } =useAuthUser();


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
        <h2 className="text-2xl font-bold text-contrast-200 text-center mb-10">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-contrast-200"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-contrast-200 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-contrast-200 text-white py-2 rounded-md font-semibold hover:bg-contrast-300 transition disabled:opacity-50"
          >Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="text-contrast-200 hover:underline font-semibold cursor-pointer bg-none border-none p-0"
          >
            Create one
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
