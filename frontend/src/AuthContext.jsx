import React, { createContext, useContext, useState } from "react";
import axiosInstance from "./axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const tokenData = await axiosInstance.post("/token/", {
        username,
        password,
      });
      const { access, refresh } = tokenData;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      const userData = await axiosInstance.get("/users/me/");
      setUser(userData);
      return { access, refresh, user: userData}
    } catch (error) {
      throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
