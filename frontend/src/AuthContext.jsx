import React, { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserloading] = useState(true);

  const login = async (username, password) => {
    try {
      const { data: tokenData } = await axiosInstance.post("/token/", {
        username,
        password,
      });
      const { access, refresh } = tokenData;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      const { data: userData } = await axiosInstance.get("/users/me/");
      setUser(userData);
      return { access, refresh, user: userData };
    } catch (error) {
      throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (access) {
      axiosInstance
        .get(`/users/me/`)
        .then((response) => {
          setUser(response.data);
          setUserloading(false);
        })
        .catch((error) => {
          console.error(`Failed to fetch user data: ${error}`);
          logout();
          setUserloading(false);
        });
    } else {
      setUserloading(false);
    }
  }, []);

  const value = { user, login, logout, userLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
