// import React from 'react';
import Services from "../Services/servicescomponent/Servicecomponent";
import ourmission from "../../../../public/assets/services/about.jpg";
import "./Services.css";
import "./Graphic.css";
import "./servicescomponent/Readytowork.css";
import Servicesicons from "../Services/servicescomponent/Servicesicons";
import Readytowork from "../Services/servicescomponent/Readytowork";
import Navbar from "../../Navbar";
import Hero from "../../Hero";
// import Footer from "../../footer";
import Servicedata from "./servicescomponent/Servicesdata";
import digital from "../../../../public/assets/Vider/digital.mp4";
import React from "react";
import { digitalMarketing } from "../../index";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import SkytechUp from "./Skytech";
import { FaCircleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { digitalPakages } from "../../index";
import { FaCheckCircle } from "react-icons/fa";
import SkytehName from "../About/SkytehName";
import WhyChooseSkyTech from "./Whychoose";
import ServicesContact from "./servicesContact";
import { digitalExtraContent} from "../../index";

const Degitalmrkiting = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <Navbar /> */}
      <Hero video={digital} />
      <div className="degitalcontainer mt-5">
        <div className="col-md-12 text-center mt-5">
          <h1>        <SkytehName />
            <TypeAnimation
              sequence={[
        "Elevate Your Brand with Expert Digital Marketing",
                1000,
                "",
                500,
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "#007bff", fontWeight: "bold" }}
              repeat={Infinity}
            />{" "}
          </h1>
        </div>
        {
          <Servicedata
            description=<>
               In today's fast-paced digital world, social media is more than
              just a platform for communication—it is the core of every
              successful marketing strategy. At <SkytehName/>, we offer
              comprehensive Social Media Marketing (SMM) services designed to
              help your brand connect, engage, and grow across major platforms.
            </>
          />
        }
        <div>
          <Slider {...settings}>
            {digitalMarketing.map((section, index) => (
              <div key={index} className="slider-element  px-2 ">
                <div className="card p-3 shadow-md">
                  <SkytechUp />
                  <h5 className="card-title">{section.title }</h5>
                  <p className="card-text text-muted">
                    <strong>What We Offer: </strong>
                    {section.description}
                  </p>

                  {/* Render Features inside <ul> */}
                  {section.features && section.features.length > 0 && (
                    <ul>
                      {section.features.map((feature, idx) => (
                        <li key={idx}>
                          <Link to="/Contact">
                            <FaCircleRight className="priceIcons" />
                            {feature}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="degitalcontainer  mt-5">
        {digitalPakages.map((section, index) => (
          <div key={index} className="package-section">
            <h2 className="text-center text-primary">{section.heading}</h2>
            <p className="text-center text-muted">{section.description}</p>

            <div className="row">
              {section.packages.map((pkg, idx) => (
                <div key={idx} className="col-md-4 mb-4">
                  <div className="package-card">
                    <h3 className="package-title">{pkg.package}</h3>
                    <ul className="list-unstyled">
                      {pkg.services.map((service, serviceIdx) => (
                        <li key={serviceIdx} className="service-item">
                          <FaCheckCircle className="service-icon" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    <p className="package-price">{pkg.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <DigitalExtra/> */}
      
      < WhyChooseSkyTech content={digitalExtraContent} />
            <ServicesContact heading="Let’s Take Your Business to the Next Level!" para="Book a free digital marketing consultation today!"/>

      <Servicesicons  />
      {/* <Footer /> */}
    </>
  );
};

export default Degitalmrkiting;
