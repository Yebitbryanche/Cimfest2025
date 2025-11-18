import React, { useState } from "react";
import { GradientButton } from "../Components/GradientButton";
import images from "../types/images";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const base_URL = "http://127.0.0.1:8000"


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [user_name,setUser_name] = useState("");
  const [password,setPassword] = useState("")
  const [phone, setphone] = useState("")
  const [role, setRole] = useState(false)
  const [email,setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try{
      const response = await axios.post(`${base_URL}/signup`, {
      userName: user_name,  // ✅ Changed from user_name to userName
      email,
      password,
      phone,
      role
      });
      console.log(response.data)
      setEmail("")
      setUser_name("")
      setPassword("")
      setphone("")
      setRole(false)

      setTimeout(() => {
        navigate("/auth/signin")
      },2000);
    }
    catch(err:any){
      console.log(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex items-center justify-center bg-tertiary p-10">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="border border-gray-600 text-white p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        {/* Username */}
        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Username</label>
          <input
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            type="text"
            placeholder="Your name"
            className="border border-gray-600 p-3 text-white placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            type="text"
            placeholder="Your contact"
            className="border border-gray-600 text-white p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-4">
          <label className="mb-2 font-medium text-white">Password</label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full border border-gray-600 text-white placeholder:text-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
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
              className="w-full border border-gray-600 text-white p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-xl text-gray-500 cursor-pointer"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>

                <div className="flex items-center mb-6">
          <input
            id="creator-role"
            type="checkbox"
            checked={role}
            onChange={(e) => setRole(e.target.checked)}
            className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
          />
          <label htmlFor="creator-role" className="ml-2 text-sm font-medium text-gray-300">
            Sign up as a Producer
          </label>
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
    </form>
  );
};

export default SignUp;
