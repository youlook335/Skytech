import React, { useEffect } from "react";
import "./Styles/Services.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000,  });
  }, []);

  const animations = [
    "flip-left",
    "flip-right", 
    "zoom-in",
    "fade-up", 
    "flip-right", 
    "flip-up", 
  ];

  return (
    <div className="containerr mt-5">
       
  
      <div className="mainService row mt-5">
      <div className="headingHome">  <h2 className="text-center ">
        <span className="text-primary">Services </span>We Offer
      </h2></div>
        {props.data.map((da, index) => (
          <div key={index} className=" col-md-4 col-sm-6 col-12 mb-4">
            <div
              style={{ minHeight: "100%" }}
              className="containerService shadow p-3"
              data-aos={animations[index]}  // Apply different animations dynamically
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-delay={index * 200} // Optional: Add delay for sequential animation
            >
              <div className="card-logo">
                {da.img ? (
                  <img src={da.img} alt="Card Logo" className="img-fluid" />
                ) : (
                  <i className={da.icon + " service-img-alt-icons"}></i>
                )}
              </div>
              <h4 className="mt-4 text-primary ">{da.heading}</h4>
              <p className="servicesDescription card-para  ">{da.Description}</p>
              <Link to={da.appLink} className="btn btn-primary">
                {da.btn}
                <span>
                  <i className="fa-solid fa-arrow-right m-1 p-1"></i>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
