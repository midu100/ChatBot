import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-6 text-white drop-shadow-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            <FaUser className="text-violet-400 text-2xl" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold font-montserrat leading-tight">Welcome Back</h1>
            <p className="text-white/70 text-sm font-montserrat">Sign in to continue to your chatbot</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">
          {/* Title */}
          <div className="flex items-center gap-5 mb-6">
            <div className="h-10 w-10 rounded-2xl bg-violet-600/20 flex items-center justify-center">
              <MdLogin className="text-violet-400 text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white font-montserrat">Login</h2>
              <p className="text-gray-400 text-sm font-montserrat">Use your email and password</p>
            </div>
          </div>

          {/* Form (Design Only) */}
          <div className="space-y-4">
            {/* Email */}
            <label className="block">
              <span className="text-sm font-medium text-gray-300">Email</span>
              <div className="mt-1 flex items-center gap-3 rounded-2xl border border-gray-700 bg-black/40 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-violet-500">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full outline-none bg-transparent placeholder:text-gray-500 text-white"
                />
              </div>
            </label>

            {/* Password */}
            <label className="block">
              <span className="text-sm font-medium text-gray-300">Password</span>
              <div className="mt-1 flex items-center gap-3 rounded-2xl border border-gray-700 bg-black/40 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-violet-500">
                <FaLock className="text-gray-500" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full outline-none bg-transparent placeholder:text-gray-500 text-white"
                />
                {showPass ? (
                  <button type="button">
                    <IoMdEyeOff
                      onClick={() => setShowPass(!showPass)}
                      className="text-gray-400 hover:text-white transition"
                    />
                  </button>
                ) : (
                  <button type="button">
                    <IoEye
                      onClick={() => setShowPass(!showPass)}
                      className="text-gray-400 hover:text-white transition"
                    />
                  </button>
                )}
              </div>
            </label>

            {/* Extras */}
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 select-none cursor-pointer">
                <input
                  type="checkbox"
                  className="size-4 rounded-md border-gray-600 bg-black text-violet-500 focus:ring-violet-500"
                />
                <span className="text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-violet-400 hover:text-violet-500 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button className="w-full mt-2 rounded-2xl bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold py-3 shadow-md transition">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-gray-700" />
              <span className="text-xs text-gray-500">or continue with</span>
              <div className="h-px flex-1 bg-gray-700" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-700 bg-black/40 py-3 hover:bg-gray-800 transition shadow-sm text-white">
                <FaGoogle />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-700 bg-black/40 py-3 hover:bg-gray-800 transition shadow-sm text-white">
                <FaGithub />
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Don’t have an account?
            <Link to={'/registration'} className="ml-1 text-violet-400 hover:text-violet-500 font-semibold">
              Create one
            </Link>
          </p>
        </div>

        {/* Tiny footer */}
        <p className="text-center text-white/50 text-xs mt-5">
          © {new Date().getFullYear()} Chatbot — All rights reserved.
        </p>
      </div>
    </div>
  );
}
