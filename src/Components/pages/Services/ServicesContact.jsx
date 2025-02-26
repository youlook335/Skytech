import React from "react";
import './SContact.css';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
const ServicesContact = ({ heading , para}) => {
  return (
<><div className="mainContactyServices">
  <h2>{heading}</h2>
  <p>{para}</p>

<div className="servicesContact">
      <div className="socialicons d-flex">
        <div className="socialIconItem">
          <a
            href="https://www.facebook.com/people/Skytech/61551669712091/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="socialIconItem">
          <a
            href="https://www.instagram.com/sky_techdot/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="socialIconItem">
          <a
            href="https://www.linkedin.com/company/sky-tech-dot/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="socialIconItem">
          <a
            href="https://www.youtube.com/@skytechitinstitute"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="socialIconItem">
          <a
            href="https://www.pinterest.com/skytechdot/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaPinterest />
          </a>
        </div>
        <div className="socialIconItem">
          <a
            href="https://www.threads.net/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaSquareThreads />
          </a>
        </div>
        <div className="socialIconItem">
          <a
            href="mailto:info@skytech.com.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
    </div>

</>    
  );
};

export default ServicesContact;
