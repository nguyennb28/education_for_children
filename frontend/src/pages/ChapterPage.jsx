import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const ChapterPage = () => {
  const { id } = useParams();
  const { user, userLoading } = useAuth();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  const getLessonsOfChapter = async () => {
    const {data: response} = await axiosInstance.get(`/chapters/${id}/`);
    if (response) {
      console.log(response.lessons);
    }
  };

  useEffect(() => {
    if (!userLoading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, userLoading, navigate]);

  useEffect(() => {
    getLessonsOfChapter();
  }, []);

  return <div className="chapterPage">Chapter id: {id}</div>;
};

export default ChapterPage;
