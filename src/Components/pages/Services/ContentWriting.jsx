import React, { useEffect } from "react";
import "./Services.css";
import Servicesdata from "./servicescomponent/Servicesdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../../Navbar";
import Hero from "../../Hero";
import "./Graphic.css"
import content from "../../../../public/assets/Vider/content.mp4";
import Slider from "react-slick";
import { FaCircleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Readytowork from "./servicescomponent/Readytowork";
import AOS from "aos";
import SkytechUp from "./Skytech.jsx";
import { blogs } from "../../index.js";
import { TypeAnimation } from "react-type-animation";
import SkytehName from "../About/SkytehName.jsx";
import { whyChooseContentWriting ,  contentWritingProcess } from "../../index.js";
import WhyChooseSection from "./Whychoose.jsx";
import ServicesContact from "./servicesContact.jsx";
import ContentWritingProcess from "./Processextra.jsx";







const ContentWriting = () => {
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

      <Hero
        video={content}
        heading="Content Writing Services at SKY Tech Dot"
        desc="At SKY Tech Dot, we recognize the transformative power of words in building meaningful connections with your audience. Our content writing services are designed to elevate your business by delivering compelling, results-driven content. Whether it’s engaging blog posts, persuasive marketing copy, or SEO-optimized web content, we create impactful narratives that resonate with your target audience and enhance your brand’s digital presence."
      />
      
      <div className="container mt-5">
        <div className="col-md-12 text-center mt-5">
          <h1>
            <SkytehName/>
            <TypeAnimation
              sequence={["Professional Content Writing Services to Elevate Your Brand", 1000, "", 500]}
              wrapper="span"
              speed={50}
              style={{ color: "#007bff", fontWeight: "bold" }}
              repeat={Infinity}
            />{" "}
          </h1>

          </div>        </div>
      <Servicesdata
        description="Quality content is the foundation of a successful online presence. At Sky Tech, we craft engaging, persuasive, and SEO-friendly content that boosts your brand, attracts your audience, and drives conversions. Whether you need compelling website copy, blog articles, or social media content, we deliver words that work."
      />
      <div className="mainContainerContaint">
      <Slider {...settings}>
        {blogs.map((items, index) => (
          <div className=" slider-element"    data-aos="flip-left"
          key={index}>
            <div className="card p-3 shadow-md">
    <SkytechUp/>
              <h5 className="card-title mb-2">
                {items.title || "No Title Available"}
              </h5>
              <p className="card-text text-muted">
                <strong>What We Offer:</strong> {items.description || "No Description Available"}
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
        ))
      }
    </Slider>
    </div>
    

{/* <div className="container mt-5">
<h1>Why Choose Sky Tech Dot?</h1>
<ul>
  <li><strong>Custom Solution</strong> : Desing tailored to align with your brand's identity.</li>
<li><strong>Expert Team</strong>: Professional designers with year of experience.</li>
<li><strong>Timely Delivery</strong>: Quality work delivered on time</li>
<li><strong>Innovative Designs</strong>Creativity that adds value to your business</li> */}
<ContentWritingProcess content={ contentWritingProcess }/>
<WhyChooseSection content={whyChooseContentWriting}/>
<ServicesContact heading={"Let’s Create Content That Converts!"} para={"Get a free consultation today!"}/>
      <Readytowork />
    </>
  );
};

export default ContentWriting;
  
   {/* <div style={{ height: "300px" }} className="last mt-5">
        <h2 style={{ fontSize: "40px" }} className="lastheadinf">
          Let’s Write Your Success Story Together!
        </h2>
        <p
          className="text-white z-index-1"
          style={{ color: "white", zIndex: 1 }}
        >
          Contact SKY Tech Dot today to discuss your content needs and craft a
          customized solution that drives impactful results.
        </p>
        <div style={{ zIndex: 1, color: "white" }} className=" d-flex gap-4">
          <div>
            Empowering businesses through innovative solutions and unmatched
            creativity – Your growth is our priority.
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
   