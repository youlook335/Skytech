import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Graphic.css";
import Readytowork from "./servicescomponent/Readytowork";
import Servicesdata from "./servicescomponent/Servicesdata";
// import Navbar from "../../Navbar";
import Hero from "../../Hero";
// import Footer from "../../footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaCircleRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
// import web from "../../../../public/assets/Vider/web.mp4";
import {
  vedioEditing,
  whyChooseVedio,
  VedioProcess,
} from "../../index";
import SkytechUp from "./Skytech";
import SkytehName from "../About/SkytehName";
import WhyChooseSection from "./Whychoose";
import ContentWritingProcess from "./Processextra";
import ServicesContact from "./servicesContact";
const Vedio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
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
      {/* <Hero video={web} heading="" desc="" /> */}
      <div className="containerr mt-5">
        <div className="col-md-12 text-center mt-5">
          <h1>
            <SkytehName />
            <TypeAnimation
              sequence={[
                "Professional Video Editing Services to Captivate Your Audience",
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

        <Servicesdata
          description=<>
            {" "}
            <div className="sevicesText">
              Video content is one of the most powerful ways to engage, inform,
              and inspire your audience. At <SkytehName />, we offer
              professional video editing services that transform raw footage
              into compelling visual stories. Whether you need promotional
              videos, social media content, or cinematic edits, we bring
              creativity and precision to every project."{" "}
            </div>
          </>
        />

        <div className="mainContainerContaint">
          <Slider {...settings}>
            {vedioEditing.map((items, index) => (
              <div className=" slider-element" data-aos="flip-left" key={index}>
                <div className="card p-3 shadow-md">
                  <SkytechUp />
                  <h5 className="card-title mb-2">
                    {items.title || "No Title Available"}
                  </h5>
                  <p className="card-text text-muted">
                    <strong>What We Offer:</strong>{" "}
                    {items.description || "No Description Available"}
                  </p>
                  <ul>
                    {Array.isArray(items.features) &&
                      items.features.map((feature, idx) => (
                        <li key={idx} className="prices">
                          <div>
                            <Link to="/Contact">
                              <FaCircleRight className="priceIcons" />
                            </Link>
                            <span className="actualPrice">{feature}</span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
       
      </div>

      <ContentWritingProcess content={VedioProcess} />
      <WhyChooseSection content={whyChooseVedio} />
      <ServicesContact
        heading="Let’s Bring Your Vision to Life!"
        para={"Get a free consultation today!"}
      />
      <Readytowork />
      {/* <Footer /> */}
    </>
  );
};
export default Vedio;
