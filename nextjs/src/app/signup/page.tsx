"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // latest syntax
import axios from "axios"; 


export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Signup
        </h1>
        <form action="">
          <div>
            <label
              htmlFor="username"
              className="block text-lm font-large text-white-700 p-2"
            >
              Username
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="username"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lm font-large text-white-700 p-2"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lm font-large text-white-700 p-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="gap-5 m-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-0"
          >
            Sign Up
          </button>
        </form>
        <p className="m-3 mt-4 text-sm text-center text-white-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
