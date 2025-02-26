import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <>
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Đăng nhập
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2 text-left"
              htmlFor="username"
            >
              Tài khoản / Số điện thoại
            </label>
            <input
              type="text"
              id="username"
              placeholder="Nhập tài khoản / số điện thoại"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 text-left"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
          >
            Đăng nhập
          </button>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
