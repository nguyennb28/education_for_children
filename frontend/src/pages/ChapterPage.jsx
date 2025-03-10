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
  const [chapterNumber, setChapterNumber] = useState(null);
  const [infoChapter, setInfoChapter] = useState({});
  const [userProgress, setUserProgress] = useState({});
  const [isCompleteLesson, setIsCompleteLesson] = useState([]);
  const navigate = useNavigate();
  // if in chapter_number is empty => lesson_number is opened to study
  const CHAPTER_NUMBER = 1;
  const LESSON_NUMBER = 1;

  const url = "/lessons";

  const getLessonsOfChapter = async () => {
    const { data: response } = await axiosInstance.get(`/chapters/${id}/`);
    if (response) {
      setChapterNumber(response.chapter_number);
      setLessons(response.lessons);
    }
  };

  const getInfoLessonsByChapter = async () => {
    try {
      const response = await axiosInstance.get(
        `/lessons/by_chapter/?chapter_id=${id}`
      );

      if (response.status == 200) {
        setInfoChapter(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkIsCompleteLessons = async (lessonsProgress) => {
    try {
      const lesson_query = lessonsProgress.reduce((acc, lesson, index) => {
        return index === 0
          ? `?lesson_id=${lesson.id}`
          : `${acc}&lesson_id=${lesson.id}`;
      }, "");
      const response = await axiosInstance.get(
        `/user-progress/by_lessons/${lesson_query}`
      );
      if (response.status == 200) {
        setIsCompleteLesson(response.data);
        const completedLessonNumbers = response.data
          .filter((progress) => progress.is_completed)
          .map((progress) => {
            // Tìm lesson có id tương ứng với progress.lesson
            const lesson = lessonsProgress.find(
              (l) => l.id === progress.lesson
            );
            return lesson ? lesson.lesson_number : null;
          })
          .filter((num) => num !== null);

        // count lesson exist in progress
        const maxCompleted =
          completedLessonNumbers.length > 0
            ? Math.max(...completedLessonNumbers)
            : 0;

        console.log(maxCompleted);

        const updateLessons = lessons.map((lesson) => {
          if (
            lesson.lesson_number <= maxCompleted ||
            lesson.lesson_number === maxCompleted + 1
          ) {
            return {
              ...lesson,
              lock: false,
            };
          } else {
            return { ...lesson, lock: true };
          }
        });
        setLessons(updateLessons);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderLessons = (items) => {
    /*
    
      CardLink cho truy cập khi nó là bài đầu tiên của chapter đầu tiên
      Hoặc bài học hiện tại có giá trị is_complete=True
      Nếu không thì ẩn hết
    */

    return items.map((item) => (
      <CardLink
        key={item.lesson_number}
        id={item.id}
        url={url}
        title={`Bài ${item.lesson_number} - ${item.title}`}
        lock={item.lock}
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
    getInfoLessonsByChapter(); // getUserProgressByChapter();
  }, []);

  useEffect(() => {
    if (infoChapter && Array.isArray(infoChapter.lesson)) {
      checkIsCompleteLessons(infoChapter.lesson);
      // modify lesson
      // console.log(lessons);
    }
  }, [infoChapter]);

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
