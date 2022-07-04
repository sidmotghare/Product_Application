import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import "./Navigation.css";

const Navigation = () => {
  let { logout, user } = useAuthContext();
  return (
    <div>
      <nav className="navbar">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/add-product">Add Product</Link>
          </li>
        </ul>
        <ul className="menu2">
          <li>
            <span className="welcome-message">Welcome, {user.username}</span>
          </li>
          <li className="menu-item">
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
