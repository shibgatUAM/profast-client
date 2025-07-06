import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-5xl font-extrabold mb-2">Welcome Back</h1>
      <p className="mb-6 text-gray-600">Login with Profast</p>

      <form>
        <label htmlFor="email" className="font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        />
        <label htmlFor="password" className="font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
        />
        <div className="text-base text-left mb-4 text-[#71717A] cursor-pointer underline">
          Forget Password?
        </div>
        <button className="w-full bg-[#CAEB66] py-2 rounded font-semibold mb-4 cursor-pointer">
          Login
        </button>
        <div className="text-base mb-4">
          Don’t have any account?{' '}
          <span className="text-[#95C11F] cursor-pointer">Register</span>
        </div>
        <div className="text-center text-gray-500 mb-4">Or</div>
        <button className="w-full flex items-center justify-center gap-2 py-2 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <FcGoogle className="w-5 h-5" />
          <span className="font-bold">Login with Google</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
