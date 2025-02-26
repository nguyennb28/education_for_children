import Information from "../elements/profilepage/Information";
import UpdateInfo from "../elements/profilepage/UpdateInfo";
import { useAuth } from "../AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const ProfilePage = () => {
  const [update, setUpdate] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="profilePage">
      <div className="bg-gray-80 rounded-lg shadow-xl mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
        {!update ? (
          <>
            <Information user={user} />
            <div className="p-2">
              <button
                className="cursor-pointer"
                onClick={(e) => setUpdate(!update)}
                title="Chỉnh sửa"
              >
                <Cog6ToothIcon className="size-6" />
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
