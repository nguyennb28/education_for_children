import ImageChildren8 from "../assets/imgs/homepage/8.jpg";
import LoginForm from "../elements/loginpage/LoginForm";
const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* image  */}
          <div className="hidden md:block">
            <img src={ImageChildren8} alt="Trẻ em" />
          </div>
          {/*  */}
          <LoginForm />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
