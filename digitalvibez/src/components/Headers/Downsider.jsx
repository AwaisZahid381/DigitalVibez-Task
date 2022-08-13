import React from "react";
import "./Downsider.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ReactStars from "react-stars";
const Downsider = () => {
  return (
    <>
      <div className="main">
        <div className="picwala">
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt="logo"
            className="logoimg"
          />
          <div className="logsbox">
          <FaFacebookSquare className="logos" />
          <FaTwitterSquare  className="logos"/>
          <FaLinkedin  className="logos"/>
          </div>
        </div>
        <div className="others">
          <h1 className="head1">as.de Gutscheine - Juni 2022</h1>
          <div className="rest">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={40}
            value={4.5}
            color1={"rgba(128, 128, 128, 0.437)"}
            color2={"#ffd700"}
            className="stars"
            />
            <p>3.5 Lorem ipsum dolor sit amet </p>
            <button className="btnpro">Promise</button>
            </div>
            <h2 className="head2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </div>
      </div>
    </>
  );
};

export default Downsider;
