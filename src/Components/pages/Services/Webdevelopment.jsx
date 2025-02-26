import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./webdevelop.css";
import "./Services.css";
import Servicesicons from "./servicescomponent/Servicesicons";
import Servicesdata from "./servicescomponent/Servicesdata";
import Navbar from "../../Navbar";
import Hero from "../../Hero";
// import ourmission from "../../../../public/assets/services/webServices.webp";
import Readytowork from "../../pages/Services/servicescomponent/Readytowork";
// import Footer from "../../footer";
import Aos from "aos";
import "aos/dist/aos.css";
import web from "../../../../public/assets/Vider/website.mp4";
import { TypeAnimation } from "react-type-animation";
import { websites ,whyChooseSkyTechWeb , webDevelopmentProcess } from "../../index.js";
import Slider from "react-slick";
import SkytechUp from "./Skytech.jsx";
import { FaCircleRight } from "react-icons/fa6";
import SkytehName from "../About/SkytehName.jsx";
import ContentWritingProcess from "./Processextra.jsx";
import WhyChooseSection from "./Whychoose.jsx";
import ServicesContact from "./servicesContact.jsx";
import TechStack from "./Techstak.jsx";

const Webdevelopment = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
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
      <Hero
        video={web}
        heading="Creating High-Performance Websites for a Digital World"
        desc="SkyTech builds responsive, user-friendly, and visually stunning websites that enhance your online presence. Whether it's a business website or a complex web application, we ensure seamless performance and an exceptional user experience."
      />
      <div className="col-md-12 text-center mt-5">
        <h1>
          <SkytehName />
          <TypeAnimation
            sequence={[
              "Elevating Your Business with Expert Web Developmentt",
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
          In today’s digital landscape, a well-designed website is essential for
          success. At <SkytehName />, we specialize in developing custom,
          high-performance websites that enhance your online presence, engage
          your target audience, and drive real business results. Whether you’re
          a startup or an established enterprise, our cutting-edge solutions
          empower you to thrive in the digital world.
        </>
      />

      <div className="Webcontainer mt-5">
        <Slider {...settings}>
          {websites.map(({ title, description, points }, idx) => (
            <div key={idx} className="slider-element  px-2">
              <div className="card  p-3 shadow-md">
                <SkytechUp />
                <h5 className="card-title mb-2">{title}</h5>
                <p className="card-text text-muted">{description}</p>
                <ul>
                  {points.map((point, index) => (
                    <li key={index}>
                      <Link to="/Contact">
                        <FaCircleRight className="priceIcons" />
                      </Link>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>


<TechStack/>
<ContentWritingProcess content={webDevelopmentProcess}/>
<WhyChooseSection content={whyChooseSkyTechWeb} />

     <ServicesContact heading="Let’s Build Something Great Together!" para="Get a free consultation today. Let’s bring your vision to life with a powerful, results-driven website."/>

     <Servicesicons  />
<Readytowork/>
      {/* <div className="container wordpressShopify">
        <img src={ourmission} alt="" />
        <div>
          <h3>Responsive Website Development</h3>
          <h1>We develop websites with latest technology</h1>

          <div className="webdevprogress">
            <p>Wordpress</p>
            <div className="progress-bar">
              <div
                className="progress-bar-value"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p>Shopify</p>
            <div className="progress-bar">
              <div
                className="progress-bar-value"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p>WooCommerce</p>
            <div className="progress-bar">
              <div
                className="progress-bar-value"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container webdevcont">
        {datataa.map((da, index) => (
          <div
            className="col-md-6 mb-4 webdevcard"
            key={index}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
          >
            <div className="digital-cont card card-service shadow p-3">
              <div className="card-logo">
                <img src={da.img} alt="Card Logo" className="img-fluid" />
              </div>
              <h4 className="heading-4 mt-4 text-primary">{da.heading}</h4>
              <p className="card-para">{da.description}</p>
              <Link
                to="/DigitalMarketing"
                className="digital-btn btn btn-primary"
              >
                {da.btn}
                <span>
                  <i className="fa-solid fa-arrow-right m-1 p-1"></i>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className='lastsection mt-5'>

        <div className='weith sit'>

          <h2 className='lastheading'>Your project deserves better IT services</h2>
          <p className='para'>Why Choose SKY Tech? Craft Your Dream Website, Pixel-Perfect.</p>
          <p className='para'>Bug-Free & High-Functioning</p>
          <p className='para'>Creative Tailored to You</p>
          <p className='para'>Responsive & Mobile-First:</p>
          <p className='para'>Performant & Scalable</p>
          <p className='para'>Expert design & development</p>
          <p className='para'>SEO best practices</p>
        </div>
      </div> */}
      {/* <Footer /> */}
    </>
  );
};

// const datataa = [
//   {
//     img: "../../../../public/assets/cards/ecomerce.png",
//     heading: "Business Websites",
//     description: "Serve as an online presence for businesses of all sizes.",
//     btn: "Learn More",
//   },
//   {
//     img: "../../../../public/assets/cards/Busniss.png",
//     heading: "E-commerce Websites",
//     description:
//       "E-commerce websites enable online buying and selling of products or services. ",
//     btn: "Explore",
//   },
//   {
//     img: "../../../../public/assets/cards/education.png",
//     heading: "Portfolio Websites",
//     description:
//       "Portfolio websites are used by artists, designers, photographers, and other creative professionals.",
//     btn: "Discover",
//   },
//   {
//     img: "../../../../public/assets/cards/softwer.png",
//     heading: "Educational Websites",
//     description:
//       "Educational websites provide learning resources, courses, tutorials, and other educational content.",
//     btn: "Get Started",
//   },
//   {
//     img: "../../../../public/assets/cards/eastate.png",
//     heading: "Real Estate Websites",
//     description:
//       " Real estate websites list properties for sale or rent, along with detailed property information, photos, maps, and contact details",
//     btn: "Get Started",
//   },
//   {
//     img: "../../../../public/assets/cards/comunity.png",
//     heading: "Community or Forum Websites",
//     description:
//       "Community or forum websites provide a platform for users to engage in discussions, share knowledge, ask questions, individuals.",
//     btn: "Get Started",
//   },
// ];

export default Webdevelopment;
