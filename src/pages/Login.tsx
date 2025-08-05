import React, { type FormEvent } from 'react';
import { useAuth } from '../admin/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* lav admincheck med server / API */
    const isAdmin = email === "testing@gmail.com";

    login({ email: 'testing@gmail.com', password:"12345", isAdmin });
    navigate('/admin/admindashboard');
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">Admin Login</h2>
      <p>testing@gmail.com</p>
      <p>12345</p>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
