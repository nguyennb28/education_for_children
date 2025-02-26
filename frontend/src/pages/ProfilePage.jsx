import Information from "../elements/profilepage/Infomation";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="profilePage">
      <div className="bg-gray-80 rounded-lg shadow-xl mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Information user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
