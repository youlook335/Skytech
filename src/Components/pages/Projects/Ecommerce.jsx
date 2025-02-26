import React from "react";
// import Navbar from '../../Navbar'
import Hero from "../../Hero";
// import Footer from "../../footer";
import Ecomerce from "../../../../public/assets/heros/e-comerce.png";
const Ecommerce = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero
        img={Ecomerce}
        heading="Building Scalable and Profitable Online Stores"
        desc="SkyTech creates tailored e-commerce solutions that help businesses grow in the digital marketplace. From user-friendly shopping experiences to secure payment integrations, we ensure your online store stands out and drives revenue."
      />
      <div className="container">
        <h2 className="text-center mt-5">
          <span className="text-primary">Ecommerce</span> Store
        </h2>
        <div className="row mt-5 animate__animated animate__fadeInRight">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-eduio.pantheonsite.io/">
                <img src="/assets/project10.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-secondio.pantheonsite.io/">
                <img src="/assets/project11.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-infoeduio.pantheonsite.io/">
                <img src="/assets/project12.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5 animate__animated animate__fadeInLeft">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="http://daniyalahmed.rf.gd/?i=1">
                <img src="/assets/project13.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-hotbite.pantheonsite.io/">
                <img src="/assets/project14.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-st-business.pantheonsite.io/">
                <img src="/assets/project15.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Ecommerce;
