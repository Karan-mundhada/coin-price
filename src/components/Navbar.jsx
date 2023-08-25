import React from "react";
import { BsCoin } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <BsCoin className="icon" />
        <h1>
          Coin <span className="purple"> Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
