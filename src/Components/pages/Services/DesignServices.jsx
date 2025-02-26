import React from "react";
import Services from "./servicescomponent/Servicecomponent";
import Deigner from "../../../../public/assets/services/Designer.png";
import Servicesdata from "./servicescomponent/Servicesdata";
import "./Services.css";
import Navbar from "../../Navbar";
import Hero from "../../Hero";
// import Footer from "../../footer";

import disign from "../../../../public/assets/Vider/disign.mp4";

const DesignServices = () => {
  const design = [
    {
      heading: "Graphic Design",
      description:
        "Logos, brochures, business cards, and other visual materials.",
    },
    {
      heading: "Branding",
      description: "Comprehensive brand identity design.",
    },
    {
      heading: "UI/UX Design",
      description:
        "User interface and user experience design for digital products.",
    },
    {
      heading: "Web Design",
      description: "Custom website design focused on aesthetics and usability.",
    },
  ];
  return (
    <>
      //
      <Hero
        video={disign}
        heading="Innovative Designs That Elevate Your Brand"
        desc="SkyTech’s design services focus on creating unique, impactful visuals that align with your brand's vision. Whether it’s for digital or print media, we deliver designs that inspire and captivate."
      />
      <div className="container">
        <Servicesdata
          heading="DESIGNING SERVICES"
          description="SKY Tech. provides top-notch Designing Services to create visually appealing andfunctional designs Our services include graphic design, branding, and UI/UX design, all aimed at delivering compelling visual experiences that resonate with your target audience."
        />
        ​
        <div className="center">
          <div>
            <img className="service-img" src={Deigner} />
          </div>
          <div className="side">
            {design.map((service, index) => (
              <Services
                key={index}
                heading={service.heading}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default DesignServices;
