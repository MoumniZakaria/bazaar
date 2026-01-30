import React from "react";

const Page = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#fafafa] overflow-hidden">
      
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-start justify-center top-16 pointer-events-none">
        <img
          src="/zellig-logo.png"
          alt="background logo"
          className="w-[380px] opacity-80"
        />
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md p-10 rounded-xl flex flex-col gap-6 border-2 border-[#d4af37]">
        
        {/* Title */}
        <div className="text-center">
          <h1 className="font-kufi text-4xl md:text-5xl text-[#1e3b8a] font-bold tracking-wide">
            MARRAKESH
          </h1>
          <p className="mt-2 text-[#1e3b8a]">
            Enter the Realm of Elegance
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm text-[#1e3b8a]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3b8a]"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-sm text-[#1e3b8a]">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3b8a]"
          />
        </div>

        {/* Login Button */}
        <button className="mt-2 w-full bg-[#1e3b8a] text-white font-semibold py-2 rounded-md hover:bg-[#163163] transition hover:cursor-pointer">
          LOGIN
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-[#737a87]">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          {/* Facebook */}
          <button className="w-1/2 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition hover:cursor-pointer">
            <svg viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
              <path fill="#fff" d="M26.6 29h4.9l.8-5h-5.7v-2.7c0-2.1.7-3.9 2.6-3.9h3.1v-4.4c-.5-.1-1.7-.2-3.9-.2-4.6 0-7.3 2.4-7.3 7.9V24h-4.7v5h4.7v13.7c.6.1 1.6.2 2.6.2.9 0 1.7-.1 2.6-.2V29z"/>
            </svg>
          </button>

          {/* Google */}
          <button className="w-1/2 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition hover:cursor-pointer">
            <svg viewBox="0 0 48 48" className="w-6 h-6">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
             </svg>
          </button>
        </div>

        {/* Sign up */}
        <div className="text-center mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-[#d4af37] font-semibold hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
