import React, { useEffect } from "react";
import "./Impact.css";
import pfp2 from "../../../../public/assets/About/impact-img1.jpg";
import pfp1 from "../../../../public/assets/About/impact-img2.jpg";
import Aos from "aos";
import { TypeAnimation } from "react-type-animation";
import SkytechUp from "../Services/Skytech";

const Impact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="aboutHeading" data-aos="fade-down">
        <TypeAnimation
          sequence={["Why you should select Skytech.?", 1000, "", 500]}
          wrapper="span"
          speed={50}
          style={{ color: "#149af3", fontWeight: "bold" }}
          repeat={Infinity}
        />{" "}
      </div>
      <div className="mainAboutContainer">
        {/* Expertise Section */}
        <div className="why-item">
          <div className="icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="content" data-aos="fade-down">
            <h3>Expertise That Elevates</h3>
            <p>
              At Skytech, we bring a wealth of experience and expertise to the
              table. Our team of seasoned professionals in design, development,
              and digital marketing ensure that each project we undertake is
              executed with precision, excellence, and an unwavering focus on
              quality.
            </p>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="why-item" data-aos="fade-up-right">
          <div className="icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="content" data-aos="fade-up-right">
            <h3>Innovation at the Core</h3>
            <p>
              In an ever-evolving digital landscape, staying ahead of the curve
              is crucial. Skytech thrives on constant innovation, exploring the
              latest trends and technologies to ensure your business remains at
              the forefront of the industry.
            </p>
          </div>
        </div>

        {/* Tailored Solutions Section */}
        <div className="why-item">
          <div className="icon">
            <i className="fas fa-rocket"></i>
          </div>
          <div className="content" data-aos="fade-down">
            <h3>Tailored Solutions, Every Time</h3>
            <p>
              At Skytech, we believe your business is unique, and we tailor our
              solutions accordingly. We don’t offer generic answers; we develop
              strategies that unlock your potential, helping your business
              evolve from ordinary to extraordinary.
            </p>
          </div>
        </div>

        {/* Client-Centric Approach Section */}

        <div className="why-item">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>

          <div className="content" data-aos="fade-up-right">
            <h3>Client-Centric Approach</h3>
            <p>
              Your success is our top priority. We build lasting relationships
              by putting your needs at the center of everything we do. Through
              open communication, dedicated support, and a commitment to
              excellence, we ensure your vision is realized.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;