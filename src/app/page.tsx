"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Form */}
      <div className="flex w-1/2 items-center justify-center px-8">
        <div className="w-full max-w-[404px]">
          {/* Header */}
          <h1 className="mb-8 text-[32px] font-medium leading-[1.5] text-black">
            Get Started Now
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-[10px] border border-[#D9D9D9] px-3 py-2.5 text-[10px] font-medium text-black placeholder:text-[#D9D9D9] focus:border-[#3A5B22] focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-[10px] border border-[#D9D9D9] px-3 py-2.5 text-[10px] font-medium text-black placeholder:text-[#D9D9D9] focus:border-[#3A5B22] focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-[10px] border border-[#D9D9D9] px-3 py-2.5 text-[10px] font-medium text-black placeholder:text-[#D9D9D9] focus:border-[#3A5B22] focus:outline-none"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-[10px] w-[10px] rounded-[2px] border border-black accent-[#3A5B22]"
              />
              <span className="text-[9px] font-medium text-black">
                I agree to the terms &amp; policy
              </span>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full rounded-[10px] bg-[#3A5B22] py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#2d4a1a]"
            >
              Signup
            </button>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-1 border-t-2 border-[#F5F5F5]"></div>
              <span className="bg-white px-3 text-[9px] font-medium text-black">
                Or
              </span>
              <div className="flex-1 border-t-2 border-[#F5F5F5]"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-[10px] border border-[#D9D9D9] px-5 py-2 transition-colors hover:bg-gray-50"
              >
                <GoogleIcon />
                <span className="text-xs font-medium text-black">
                  Sign in with Google
                </span>
              </button>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-sm font-medium text-black">
              Have an account?{" "}
              <a href="#" className="text-[#3A5B22] hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative w-1/2">
        <div className="absolute inset-0 overflow-hidden rounded-l-[45px]">
          <Image
            src="https://i.pinimg.com/736x/1a/2e/b0/1a2eb02d4f91467bf9acdc54338d30bc.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#FFC107"
      />
      <path
        d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
        fill="#FF3D00"
      />
      <path
        d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
        fill="#4CAF50"
      />
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#1976D2"
      />
    </svg>
  );
}
