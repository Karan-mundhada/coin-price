import React from "react";
import { BsCoin } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <BsCoin className="icon" />
        <h1>
          Coin <span className="purple"> Search</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
