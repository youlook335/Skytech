import React from "react";
// import Navbar from "./Navbar";
import Hero from "./Hero";
// import Footer from "./Footer";
import SideBanner from "./SideBanner";

const Projects = () => {
  return (
    <>
      <Hero
        img="/assets/About/AboutBanner.webp"
        heading="Skytech - Technology & IT Solutions"
        desc="At SKYTech. we are more than a development firm we are your partners in turning ideas into powerful solutions. With a team of dedicated professionals, we combine cutting-edge technology with creative expertise to craft software that drives growth and transforms industries."
      />
      <SideBanner
        img="/assets/banner.jpg"
        heading="Web & App Development Solutions"
        paragraph=" We provide top-tier web and mobile app development services tailored to your business needs. Our expert team crafts innovative, user-friendly, and responsive websites and applications that help businesses scale effectively. Whether you're looking for a complex e-commerce platform or a sleek mobile app, we ensure your solution is reliable, secure, and built with the latest technology."
      />
      <div className="container mt-5">
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

        <div className="row mt-5 animate__animated animate__fadeInRight">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-restarora.pantheonsite.io/">
                <img src="/assets/project1.webp" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-restaurantus.pantheonsite.io/">
                <img src="/assets/project16.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-khanportolio.pantheonsite.io/">
                <img src="/assets/project17.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5 animate__animated animate__fadeInLeft">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="https://dev-portfolio-zone.pantheonsite.io/">
                <img src="/assets/project18.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="#">
                <img src="/assets/project19.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="#">
                <img src="/assets/project20.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5 animate__animated animate__fadeInRight">
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="/">
                <img src="/assets/project21.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="/">
                <img src="/assets/project22.webp" alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="project-content">
              <a href="/">
                <img src="/assets/project23.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
