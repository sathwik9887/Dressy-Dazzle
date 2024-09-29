import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username.trim(),
        password: password.trim(),
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      console.error("Login failed:", error);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen border border-black">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-black text-3xl font-semibold mb-2">
          Register an account
        </h1>
        <p className="text-black text-base font-normal mb-4">
          Enter your email and password to login
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-green-500 py-2 hover:bg-green-600 transition duration-200 rounded-lg text-white font-medium">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already registered?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
