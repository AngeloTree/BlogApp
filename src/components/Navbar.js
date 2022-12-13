import React from "react";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="brand-name">
        BlogApp
      </a>
      <button className="hamburger">
        <MenuIcon />
      </button>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/likes">Most Likes</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
