import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="a" to="/">
        Home
      </Link>
      <Link className="a" to="/about">
        About
      </Link>
      <Link className="a" to="/Countries">
        Countries
      </Link>
    </div>
  );
};

export default Header;
