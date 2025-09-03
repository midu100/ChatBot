import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black p-4">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6 border border-gray-700">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-gray-400 mt-2">Join us and start your journey</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border border-gray-600 rounded-xl px-3 py-2 bg-white/5">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-xl px-3 py-2 bg-white/5">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-xl px-3 py-2 bg-white/5">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-600 rounded-xl px-3 py-2 bg-white/5">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-2 text-sm text-gray-400">Or sign up with</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition">
            <FcGoogle className="text-xl" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition">
            <FaGithub className="text-xl" /> GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <Link to={'/login'} className="text-purple-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
