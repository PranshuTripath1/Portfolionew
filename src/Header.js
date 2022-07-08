import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h3>
        <Link to="/">PT.</Link>
      </h3>
      <nav className="menuItems">
        <ul className="navList">
          <Link className="navList-item" to="/project">
            Project
          </Link>
          <Link className="navList-item" to="/skills">
            Skills
          </Link>
          <Link className="navList-item" to="/contact">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};
