import Card from "../components/Card";
import ImageChildren2 from "../assets/imgs/homepage/2.jpg";
import ImageChildren11 from "../assets/imgs/homepage/11.jpg";
import ImageChildren12 from "../assets/imgs/homepage/12.jpg";
import ImageChildren13 from "../assets/imgs/homepage/13.jpg";
import ImageChildren14 from "../assets/imgs/homepage/14.jpg";
import ImageChildren15 from "../assets/imgs/homepage/15.jpg";

const StudyPage = () => {
  return (
    <div className="studyPage">
      <div className="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="title">
          <h1 className="text-center font-semibold text-2xl uppercase">
            Các bài giảng
          </h1>
        </div>
      </div>
      <div className="flex max-w-7xl items-center justify-center p-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card image={ImageChildren2} title={"Chương 1."} description={""} />
          <Card image={ImageChildren11} title={"Chương 2."} description={""} />
          <Card image={ImageChildren12} title={"Chương 3."} description={""} />
          <Card image={ImageChildren13} title={"Chương 4."} description={""} />
          <Card image={ImageChildren14} title={"Chương 5."} description={""} />
          <Card image={ImageChildren15} title={"Chương 6."} description={""} />
        </div>
      </div>
    </div>
  );
};

export default StudyPage;
