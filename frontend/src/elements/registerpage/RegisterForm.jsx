import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex items-center justify-center p-6">
      <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng ký
        </h2>
        {/*  */}
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 text-left"
            htmlFor="username"
          >
            Tên tài khoản
          </label>
          <input
            type="text"
            id="username"
            placeholder="Nhập tên tài khoản"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/*  */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-left" htmlFor="phone">
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Nhập số điện thoại"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/*  */}
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 text-left"
            htmlFor="fullname"
          >
            Họ và tên
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Nhập họ và tên"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        {/*  */}
        <div className="mb-4">
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
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
