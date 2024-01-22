import React, { useState } from "react";
import "./Login.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
  });
  const handleLogin = () => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/products");
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column"> 
      <div className="d-flex flex-column  w-50 mx-auto ">
      <label className="">Name </label>
      <input
        className="form-control w-100 mb-3"
        type="text"
        name="name"
        id="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
      />
      </div>
      <div className="d-flex flex-column  w-50 mx-auto"><label className="">Username </label>
      <input
        className="form-control w-100 mb-3"
        type="text"
        name="username"
        id="username"
        value={data.username}
        onChange={(e) => setData({ ...data, username: e.target.value })}
        required
      /></div>
      <div className="butn w-100 text-center">
        <button
          onClick={handleLogin}
          className="btn btn-success butn w-25 mx-auto mb-3 mt-5"
          type="submit"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Login;
