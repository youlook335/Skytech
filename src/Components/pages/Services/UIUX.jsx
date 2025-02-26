import React, { useEffect } from "react";
import Services from "../Services/servicescomponent/Servicecomponent";
import ourmission from "../../../../public/assets/services/UI-UX.png";
import "./Services.css";
import Servicesdata from "../Services/servicescomponent/Servicesdata";
// import Navbar from '../../Navbar'
import Hero from "../../Hero";
// import Footer from '../../footer'
import uiux from "../../../../public/assets/Vider/uiux.mp4";
import { uiUxDesignServices } from "../../index.js";
import Slider from "react-slick";
import SkytechUp from "./Skytech.jsx";
import { FaCircleRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Aos from "aos";
import SkytehName from "../About/SkytehName.jsx";
import WhyChooseSkyTech from "./Whychoose.jsx";
import ServicesContact from "./servicesContact.jsx";
import { whyChooseContentUi } from "../../index.js";
const UIUX = () => {
  useEffect(() => {
    Aos.init({
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
  // const  Uiux  = [
  //   {
  //     heading: 'User Research and Analysis',
  //     description: 'Understanding user needs and behaviors.',
  //   },
  //   {
  //     heading: 'Wireframing and Prototyping',
  //     description: 'Creating blueprints and interactive prototypes.',
  //   },
  //   {
  //     heading: 'Usability Testing',
  //     description: 'Evaluating the effectiveness of the design with real users.',
  //   },
  //   {
  //     heading: 'Interaction Design',
  //     description:'Crafting engaging and intuitive interactions.',
  //   },
  // ]
  return (
    <>
      {/* <Navbar/> */}
      <Hero video={uiux} />
      {/* heading="Skytech - Technology & IT Solutions" desc="At SKYTech. we are more than a development firm we are your partners in turning ideas into powerful solutions. With a team of dedicated professionals, we combine cutting-edge technology with creative expertise to craft software that drives growth and transforms industries."/> */}
      <div className="degitalcontainer">
        <div className="col-md-12 text-center mt-5">
       <h1>
       <SkytehName/>            <TypeAnimation
              sequence={["Transforming Ideas into Exceptional UI/UX Experiences", 1000, "", 500]}
              wrapper="span"
              speed={50}
              style={{ color: "#007bff", fontWeight: "bold" }}
              repeat={Infinity}
            />{" "}
          </h1>
        </div>
        <Servicesdata
          description={
            <>
              User-Centered Design | Intuitive Interfaces | Seamless Experiences. A great user experience (UX) and a visually appealing user interface (UI) can make or break your digital product. At <SkytehName/> , we craft intuitive, engaging, and high-performing designs that not only look stunning but also enhance usability and conversions. Our UI/UX experts focus on delivering human-centered designs that make your website, mobile app, or software easy to navigate and enjoyable to use.
            </>
          }
        />    <div>
          <div className="mainContainerU">
            <Slider {...settings}>
              {uiUxDesignServices.map((items, index) => (
                <div
                  className="slider-element px-2"
                  data-aos="flip-left"
                  key={index}
                >
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
      </div>
      <WhyChooseSkyTech  content={whyChooseContentUi}/>
      <ServicesContact heading="Let’s Create Amazing User Experiences Together!" para="Get a free UI/UX consultation today!"/>
      {/* // */}
    </>
  );
};

export default UIUX;
