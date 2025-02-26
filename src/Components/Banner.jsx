import React from "react";
import "./Styles/banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="custom-banner">
      <div className="custom-banner-overlay"></div>
      <div className="custom-banner-container container">
        <div className="custom-banner-left">
          <div className="custom-banner-heading">
            <h2>Cost-Effective IT Service Solutions</h2>
          </div>
          <div className="custom-banner-text">
            <p>
              Big savings on professional services. Hurry, limited-time service
              discounts at SKY Tech software house in Karachi.
            </p>
          </div>
        </div>
        <div className="custom-banner-right">
          <div className="custom-banner-button">
            <Link to="/Contact" className="button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
