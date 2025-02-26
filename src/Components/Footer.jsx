import React from "react";
import "./Styles/footer.css";
import { Link } from "react-router-dom";
import { FaSquareThreads } from "react-icons/fa6";
import SkytehName from "./pages/About/SkytehName";

const Footer = () => {
  return (
    <footer className=" py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="logoFooter col-md-3 mb-3">
            <img className="footer-logo mt-3" src="\assets\logo.webp" alt="" />
            <p className="footer-p mt-3">
              Address:  Karachi  Sindh, Pakistan.
            </p>
          </div>
          <div className="col-md-3 mb-3 mt-3">
            <h3 className="footer-h3">PROJECTS</h3>
            <ul className="list-unstyled mt-4">
              <li className="mt-3">
                <Link to="/DigitalMarketing">Digital Marketing</Link>
              </li>
              <li className="mt-3">
                <Link to="/GraphicDesignings">
                  Graphic Designing / Video Editing
                </Link>
              </li>
              <li className="mt-3">
                <Link to="/Webdevelopment">Web development</Link>
              </li>
              
              <li className="mt-3">
                <Link to="/SoftwareDevelopment">Software development</Link>
              </li>
              <li className="mt-3">
                <Link to="/Ecommerce">Ecommerce solutions</Link>
              </li>
              {/* <li className='mt-3'><Link to="#">Business Consulting</Link></li> */}
            </ul>
          </div>

          <div className="col-md-3 mb-3 mt-3">
            <h3 className="footer-h3">SERVICES</h3>
            <ul className="list-unstyled">
              <li className="mt-3">
                <Link to="/Seo">SEO Services</Link>
              </li>
              <li className="mt-3">
                <Link to="/Webdevelopment">App Development</Link>
              </li>
              <li className="mt-3">
                <Link to="/DataScience">Data Science</Link>
              </li>
              <li className="mt-3">
                <Link to="/UIUX">UI/UX Design Services</Link>
              </li>
              <li className="mt-3">
                <Link to="#">Software Integration</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3 mt-3">
            <h3 className="footer-h3">Contact Us</h3>
            <p className="footer-contact">Phone: +9233-5673810</p>
            <p className="footer-contact">Monday to Saturday</p>
            <p className="footer-contact">Email: info@skytech.com.pk</p>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/Skytech/61551669712091/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="facebook-icon fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="instagram-icon fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/sky-tech-dot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="facebook-icon fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC6B3bIIbojskLZCEaLCgqlg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="instagram-icon fab fa-youtube"></i>
              </a>
              <a
                href="https://www.pinterest.com/skytechdot/"
                target="_blank"
                rel="noopener noreferrer"
              style={{color : '#E60023'}}
              >
              <i class="fa-brands fa-pinterest"></i>
              </a>
              
              <a
                href="https://www.threads.net/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
      
              >
          <i class="fa-brands fa-square-threads"></i>
              </a>
              <a 
      href="mailto:info@skytech.com.pk" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#149af3', fontSize: '24px' }}
    >
      <i className="fa-solid fa-envelope"></i>
    </a>
              </div>
          </div>
        </div>
        <hr />
        <div className="copyright row mt-4">
          <p className="text-center">
            Copyright © 2023  <SkytehName/> <span className="policy "> <Link to={"/Policy"}> Privacy Policy</Link> </span> || <span className="policy"> <Link to={"/Policy"}> Terms Of Service </Link> </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
