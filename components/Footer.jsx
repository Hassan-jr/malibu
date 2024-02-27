import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const paragraphStyle = {
    textAlign: "left",
    marginBottom: "10px",
  };

  const labelStyle = {
    display: "inline-block",
    width: "70px",
    color: "#1A73E8",
    fontWeight: "bold",
    marginLeft: "10px"
  };

  const valueStyle = {
    display: "inline-block",
    fontSize: "13px"
  };
  return (
    <div className="footer-container">
      {/* <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p> */}
      
      <div style={paragraphStyle}>
      <h3 style={{margin: "20px"}}>Get Same-Day Delivery and Serveces: Contact Us Now!</h3>
        <p>
          <span style={labelStyle}>Phone:</span>
          <span style={valueStyle}>0713 553 858</span>
        </p>
        <p>
          <span style={labelStyle}>Email:</span>
          <span style={valueStyle}>malibudeveloperslimited@gmail.com</span>
        </p>
        <p>
          <span style={labelStyle}>Address:</span>
          <span style={valueStyle}>Total Building, Northern Bypass, Thome</span>
        </p>
      </div>
      <p className="icons">
        <a
          href="https://www.instagram.com/malibudeveloperske"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a href="mailto:malibudeveloperslimited@gmail.com">
          <AiOutlineMail />
        </a>
      </p>
      <p>{currentYear} Malibu Developers Ltd. All rights reserverd</p>
    </div>
  );
};

export default Footer;
