import { useState } from "react";
import { GradientButton } from "../Components/GradientButton";
import images from "../types/images";
import { FiEye, FiEyeOff } from "react-icons/fi";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tertiary p-10">
      <div className="bg-black/50 text-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        
        {/* Logo & Title */}
        <div className="flex flex-col items-center mb-8">
          <img src={images.logo} alt="Mutumbu Logo" className="w-32 mb-4" />
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-gray-400 mt-2">Join Mutumbu and start creating</p>
        </div>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-gray-600 p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        {/* Username */}
        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Username</label>
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-600 p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Phone Number</label>
          <input
            type="number"
            placeholder="Your contact"
            className="border border-gray-600 p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full border border-gray-600 placeholder:text-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-xl placeholder:text-gray-400 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-6">
          <label className="mb-2 font-medium text-white">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              className="w-full border border-gray-600 p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>

        {/* Button */}
        <GradientButton title="Sign Up" className="w-full" />

        {/* Switch to Sign In */}
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <span className="text-purple-500 cursor-pointer hover:underline">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
