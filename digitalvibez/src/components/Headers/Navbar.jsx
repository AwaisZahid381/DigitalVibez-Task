import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navele nav1">
          <h3 className="head3">
            <span className="onespan">Cou</span>pmy
          </h3>
        </div>
        <div className="navele nav2">
          <a href="#">
            Coupons <span>&#8595;</span>
          </a>
          <a href="#">
            Stores <span>&#8595;</span>
          </a>
          <a href="#">
            Categories <span>&#8595;</span>
          </a>
          <a href="#">
            Sales <span>&#8595;</span>
          </a>
        </div>
        <div className="navele nav3">
          <form>
            <input type="search" placeholder="Search..." id="search" />
            <button type="submit" className="sbtn">Search</button>
          </form>
          <button className="login">log In <span>&#8595;</span></button>
          <div className="boxes">"""""</div>
          <div className="boxes">"""""</div>
          <div className="boxes">"""""</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
