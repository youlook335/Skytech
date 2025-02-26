import React from "react";
import Navbar from "../../Navbar";
import Hero from "../../Hero";
// import Footer from "../../Footer";

const SoftwareDevelopment = () => {
  return (
    <div>
      //
      <Hero
        img="/assets/banner.jpg"
        heading="SkyTech - Technology & IT Solutions Software Development"
        desc="SkyTech - Technology & IT Solutions WordPress Theme"
      />
      <div className="container">
        <h2 className="text-center mt-5">
          <span className="text-primary">Our</span> Work
        </h2>
        <div className="row mt-5 animate__animated animate__fadeInRight">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-eduio.pantheonsite.io/">
                <img
                  src="\assets\softwareDevelopment\softwarepic1.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-secondio.pantheonsite.io/">
                <img
                  src="\assets\softwareDevelopment\softwarepic2.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-infoeduio.pantheonsite.io/">
                <img
                  src="\assets\softwareDevelopment\softwarepic3.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SoftwareDevelopment;
