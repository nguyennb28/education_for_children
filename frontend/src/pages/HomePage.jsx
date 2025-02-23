import IntroHomePage from "../elements/homepage/Intro";
import ImageChildren1 from "../assets/imgs/homepage/1.jpg";

const HomePage = () => {
  const para = `"Giáo dục giới tính là học về cơ thể của con và cách giữ cho cơ thể
con được an toàn và khỏe mạnh. Con sẽ được học tên các bộ phận trên cơ
thể, biết những đụng chạm nào là tốt, đụng chạm nào không tốt, và học
cách nói "không" nếu con cảm thấy không thoải mái hoặc nguy hiểm.
Giống như học cách đi đường an toàn, giáo dục giới tính giúp con bảo
vệ bản thân mình."`;

  return (
    <div className="homePage">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <IntroHomePage img={ImageChildren1} content={para} />
      </div>
    </div>
  );
};

export default HomePage;
