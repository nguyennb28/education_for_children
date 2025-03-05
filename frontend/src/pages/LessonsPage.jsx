import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import Questions from "../elements/lessonpage/Questions";

const LessonsPage = () => {
  const { id } = useParams();
  const { user, userLoading } = useAuth();
  const [lesson, setLesson] = useState({});
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const getLesson = async () => {
    try {
      const response = await axiosInstance(`/lessons/${id}/`);
      if (response.status == 200) {
        setLesson(response.data);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getQuestions = async () => {
    try {
      const response = await axiosInstance(`/questions/by_lesson/${id}/`);
      if (response.status == 200) {
        setQuestions(response.data);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  /**
   *  Render Question
   *  and AnswerOptions
   * */
  const renderQA = (items) => {
    return items.map((item, index) => {
      console.log(typeof index)
      return <Questions key={item.id} title={"Câu " + (index+1)} question={item} />;
    });
  };

  useEffect(() => {
    if (!userLoading && !user) {
      navigate("/login", { replace: true });
    }
  }, [user, userLoading, navigate]);

  useEffect(() => {
    getLesson();
    getQuestions();
  }, []);

  return (
    <div className="lessonsPage">
      <div className="mx-auto flex flex-col max-w-7xl justify-between p-6 lg:px-8">
        {/* title */}
        <div className="title mb-6">
          <h1 className="text-left font-semibold text-2xl uppercase">
            Bài {lesson.lesson_number} - {lesson.title}
          </h1>
        </div>
        {/* Grid container: video & description */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <div className="lesson-video">
            <div className="">
              <iframe
                width="100%"
                height="315rem"
                src={lesson.video_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-2xl shadow-xl block"
              ></iframe>
            </div>
          </div>
          <div className="lesson-description">
            <h2 className="font-semibold text-xl">Mô tả</h2>
            <p>{lesson.description}</p>
          </div>
        </div>
        {/* Question */}
        <div className="questions">
          {questions ? renderQA(questions) : <></>}
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
