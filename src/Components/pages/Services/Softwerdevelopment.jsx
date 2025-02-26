import React, { useEffect } from 'react';

import Aos from 'aos';
import Servicesdata from './servicescomponent/Servicesdata';
// import Navbar from '../../Navbar';
import Hero from '../../Hero';
import softwer from '../../../../public/assets/Vider/softwer.mp4'
import { TypeAnimation } from 'react-type-animation';
import Slider from 'react-slick';
// import { RxDotFilled } from 'react-icons/rx';
import './Graphic.css'
import { AiOutlineCaretRight } from 'react-icons/ai';
import { FaCircleRight } from 'react-icons/fa6';
import { softwareDevelopment } from '../../index.js';
import SkytechUp from './Skytech';
import SkytehName from '../About/SkytehName.jsx';

const Softwerdevelopment = () => {
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
   return (
    <>
      {/* <Navbar /> */}
      <Hero
        video={softwer}
        heading="Transforming Ideas into Powerful Software Solutions"
        desc="At SkyTech, we craft custom software solutions that streamline operations, enhance productivity, and drive business growth. Our expert developers"
      />

      <Servicesdata
        heading="CUSTOM SOFTWARE DEVELOPMENT"
        description={<>At <SkytehName/> we are dedicated to providing cutting-edge web application development services that cater to a diverse range of industries and business needs. Our mission is to deliver intuitive, high-performing, and scalable applications that streamline workflows, enhance operational efficiency, and drive sustainable business growth.</>} 
      />
      

<div className="container mt-5">
        <div className="col-md-12 text-center mt-5">
          <h1>
            <TypeAnimation
              sequence={["Software Development", 1000, "", 500]}
              wrapper="span"
              speed={50}
              style={{ color: "#007bff", fontWeight: "bold" }}
              repeat={Infinity}
            />{" "}
          </h1>
        </div>
        
        <Slider {...settings}>
        {softwareDevelopment.map((item, idx) => (
          <div key={idx}    className=" slider-element  px-2 "
          
          data-aos="flip-left"
       >
    
   <div className="Software-card p-3 shadow-md">
                  <SkytechUp/>

        <h5 className="card-title mb-2">{item.heading}</h5>
                  <p className="card-text text-muted">
                    <strong>What We Offer: </strong>
                    {item.description}
                  </p>
            <h4 className='card-title'>Features:</h4>
            <ul className='featureUl'>
              {item.Future?.map((feature, featureIdx) => (
                <p key={featureIdx}>
                  <strong className="actualPrice"><AiOutlineCaretRight  className="priceIcons" />{feature.parent}</strong>{feature.child} <hr />
                </p>
              ))}
            </ul>

            {/* Benefits */}
             <h4 className='card-title'>Benefits:</h4>
            <ul>
              {item.Benifits?.map((feature, featureIdx) => (
                <p key={featureIdx}>
                 <FaCircleRight className="softwareIcons"/> <strong className='benefits'> {feature.parent}</strong>
                </p>
              ))}
            </ul>
          </div>
    
          </div>
        ))}

</Slider>
      </div>
    </>
  );
};
export default Softwerdevelopment;
