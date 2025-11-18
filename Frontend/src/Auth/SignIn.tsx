import React, { useState } from "react";
import images from "../types/images";
import { GradientButton } from "../Components/GradientButton";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { base_URL } from "./SignUp";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (value: string) => {
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setEmailError("");
    } else if (!regex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = async (e: React.FormEvent) =>{
    e.preventDefault();
    try{
    const response = await axios.post(`${base_URL}/login`,{
      email,
      password,
    })
    localStorage.setItem("token",response.data.access_token)
    console.log(response.data)
    setEmail("")
    setPassword("")
    console.log({email})
    validateEmail(email)

    setTimeout(()=>{
        navigate("/dashboard")
    },2000)
  }
  catch(err:any){
   console.log(err)
  }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-tertiary">
      <form onSubmit={handleLogin} className="bg-black/50 text-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        
        {/* Logo and Heading */}
        <div className="flex flex-col items-center mb-8">
          <img src={images.logo} alt="BeatFlow Logo" className="w-32 mb-4" />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-gray-500 mt-2">Sign in to your Mutumbu account</p>
        </div>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2 font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border p-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 
              ${emailError ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-purple-500"}
            `}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col mb-6 relative">
          <label htmlFor="password" className="mb-2 font-medium text-white">
            Password
          </label>

          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="border placeholder:text-gray-400 border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12 w-full"
          />

          {/* Toggle Visibility */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-11 cursor-pointer text-gray-400 hover:text-white"
          >
            {showPassword ? <IoEyeOff size={22} /> : <IoEye size={22} />}
          </span>
        </div>

        {/* Button */}
        <GradientButton className="w-full" title="Sign In" />

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-gray-400 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to="/auth/signin">
            <span className="text-purple-500 cursor-pointer hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
