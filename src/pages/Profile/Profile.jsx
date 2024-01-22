import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../Login/Login";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", JSON.stringify(null));
    navigate("/login");
  };

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    <Login/>
  }, [])

  return (
    <div className="ms-5 ">
      <h4 className="mt-3 text-success"> Welcome {user.name}</h4>
      <h4 className="text-success">Username: {user.username}</h4>
      <button
        className="btn mt-5 w-25 text-center btn-outline-warning"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
