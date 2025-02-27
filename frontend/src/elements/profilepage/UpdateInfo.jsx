import React, { useState } from "react";

const UpdateInfo = ({ user, onUpdate }) => {
  const roleMapping = {
    admin: "Quản trị viên",
    student: "Học sinh",
    teacher: "Giáo viên",
  };

  const [phone, setPhone] = useState(user?.phone || "");
  const [full_name, setFullname] = useState(user?.full_name || "");
  const [role, setRole] = useState(user?.role || "");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(full_name, phone, role, password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Chỉnh sửa thông tin cá nhân
      </h2>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-white"
        >
          Tài khoản
        </label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={user?.username || ""}
          disabled
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="full_name"
          className="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-white"
        >
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="full_name"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={full_name}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-white"
        >
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="role"
          className="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-white"
        >
          Vai trò
        </label>
        <select
          name="role"
          id="role"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={role}
          disabled
        >
          {Object.keys(roleMapping).map((item) => {
            return (
              <option key={item} value={item}>
                {roleMapping[item]}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-white"
        >
          Mật khẩu <span className="text-lime-600">(tùy chọn)</span>
        </label>
        <input
          type="text"
          id="password"
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Lưu
      </button>
    </form>
  );
};
export default UpdateInfo;
