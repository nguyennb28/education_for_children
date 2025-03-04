import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import CardLink from "../components/CardLink";

const ChapterPage = () => {
  const { id } = useParams();
  const { user, userLoading } = useAuth();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  const url = "/lessons";

  const getLessonsOfChapter = async () => {
    const { data: response } = await axiosInstance.get(`/chapters/${id}/`);
    if (response) {
      console.table(response.lessons);
      setLessons(response.lessons);
    }
  };

  const renderLessons = (items) => {
    return items.map((item) => (
      <CardLink
        key={item.id}
        id={item.id}
        url={url}
        title={`Bài ${item.lesson_number} - ${item.title}`}
      />
    ));
  };

  useEffect(() => {
    if (!userLoading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, userLoading, navigate]);

  useEffect(() => {
    getLessonsOfChapter();
  }, []);

  return (
    <div className="chapterPage">
      <div className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="title">
          <h1 className="text-center font-semibold text-2xl uppercase">
            Các bài giảng
          </h1>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons ? renderLessons(lessons) : <></>}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
