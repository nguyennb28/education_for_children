import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const LessonsPage = () => {
  const { id } = useParams();
  return <div className="lessonPage">Chapter id: {id}</div>;
};

export default LessonsPage;
