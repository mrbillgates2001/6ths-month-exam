import React from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" d-flex">
      <div className="sidebar">
        <Link to="/profile" className="main-icon ">
          <img className="mt-3" src="main-logo.png" alt="Logo" />
        </Link>
        <NavLink to="/products" className="settings-icon">
          <img src="settings.png" alt="Logo" />
        </NavLink>
        <NavLink to="/profile" className="admin-icon">
          <img src="admin.png" alt="Logo" />
        </NavLink>
        <NavLink to="/products" className="users-icon">
          <img src="users.png" alt="Logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
