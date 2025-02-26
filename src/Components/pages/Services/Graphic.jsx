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
import web from "../../../../public/assets/Vider/web.mp4";
import { graphic , whyChooseGraphicDesign , graphicDesignProcess} from "../../index";
import SkytechUp from "./Skytech";
import SkytehName from "../About/SkytehName";
import WhyChooseSection from "./Whychoose";
import ContentWritingProcess from "./Processextra";
import ServicesContact from "./servicesContact";
const Graphic = () => {
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
      {
        breakpoint: 768,  // On screens 768px and below
        settings: {
          slidesToShow: 1,  // Show 1 image per slide on mobile
          slidesToScroll: 1,
          dots: true,  // Enable dots for easier navigation
        },
      },
    ],
  };

  return (
    <>
      {/* <Navbar /> */}
      <Hero
        video={web}
        heading="Bringing Your Brand to Life with Creative Designs"
        desc="Our graphic design services at SkyTech blend creativity with strategy to craft eye-catching visuals that leave a lasting impression. From logos to branding materials, we create designs that truly represent your brand identity."
      />
      <div className="containerr mt-5">
        <div className="col-md-12 text-center mt-5">
          <h1>
            <SkytehName />
            <TypeAnimation
              sequence={["Creative Graphic Design Solutions to Elevate Your Brand", 1000, "", 500]}
              wrapper="span"
              speed={50}
              style={{ color: "#007bff", fontWeight: "bold" }}
              repeat={Infinity}
            />{" "}
          </h1>
        </div>

        <Servicesdata
         description=  <> <div className="sevicesText">A strong visual identity is key to building brand recognition and capturing your audience’s attention. At <SkytehName /> we provide professional graphic design services that bring your ideas to life with creativity, precision, and strategy. Our designs are crafted to resonate with your audience, communicate your brand message, and leave a lasting impact." </div></>/>

        <div className="servicesContainer">
          <Slider {...settings}>
            {graphic.map((item, index) => (
              <div
                key={index}
                className="slider-element   "
                data-aos={item.animation}
              >
                <div className="card  p-3 shadow-md">
                  <SkytechUp />
                  <h5 className="card-title mb-2">{item.heading}</h5>
                  <p className="card-text text-muted">
                    <strong>What We Offer: </strong>
                    {item.description}
                  </p>
                  <p className="card-text">
                    <strong>Process: </strong>

                    <p>{item.process}</p>
                  </p>
                  {/* Price List */}
                  {item.price.map((packageItem, idx) => (
                    <div key={idx} className="price-item">
                      {Object.entries(packageItem).map(([key, value]) => (
                        <div key={key}>
                          <Link to="/Contact">
                            <FaCircleRight className="priceIcons" />
                          </Link>
                          <span className="actualPrice">{value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="specialBtn">
          <Link to="/ServicesOffer">
            <button className="btnSpecial shadow-lg"> Special Offers</button>
          </Link>
        </div>
      </div>
      
<ContentWritingProcess content={graphicDesignProcess}/>
<WhyChooseSection content={whyChooseGraphicDesign}/>
<ServicesContact heading="Let’s Make Your Brand Visually Stunning!" para={"Get a free consultation today!"}/>
<Readytowork />
      {/* <Footer /> */}
    </>
  );
};
export default Graphic;
