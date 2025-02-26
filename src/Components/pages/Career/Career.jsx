import React from "react";
import Hero from "../../Hero";
import img from "../../../../public/assets/career.png";
import { Link } from "react-router-dom";
import "./career.css";
import TrustedPartner from "../marque/Turstedpatners";
import Navbar from "../../Navbar";
import Services from "../../Services";
// import Footer from "../../footer";
import Readytowork from "../Services/servicescomponent/Readytowork";

const Career = () => {
  const ServicesData = [
    {
      heading: "Web / App Development",
      Description:
        "We specialize in building dynamic and responsive websites and mobile applications that meet your business.",
      img: "/assets/webpic.png",
      btn: "Learn more",
      appLink: "/WebDevelopment",
    },
    {
      heading: "Digital Marketing",
      Description:
        "Our digital marketing services are designed to elevate your brand's visibility online. ",
      img: "/assets/digitalpic.png",
      btn: "Learn more",
      appLink: "/DigitalMarketing",
    },
    {
      heading: "Graphic Designing ",
      Description:
        "Our expert graphic designers and video editors create visually stunning content that captures attention.",
      img: "/assets/designing.png",
      btn: "Learn more",
      appLink: "/GraphicDesignings",
    },
    {
      heading: "E-Commerce Solution",
      Description:
        "We provide comprehensive e-commerce solutions that help businesses establish a robust online store.  a robust online store. ",
      img: "/assets/ecommerce.png",
      btn: "Learn more",
      appLink: "/Ecommerce",
    },
    {
      heading: "Data Science Services",
      Description:
        "Our data science services help businesses analyze and interpret complex data to make data-driven decisions.",
      img: "/assets/datascience.png",
      btn: "Learn more",
      appLink: "/DataScience",
    },
    {
      heading: "UI/UX Design",
      Description:
        "Our UI/UX design services focus on creating intuitive, user-friendly interfaces and seamless user experiences.",
      img: "/assets/uiuixdesign.png",
      btn: "Learn more",
      appLink: "/UIUX",
    },
  ];

  return (
    <>
    
      <Hero
        img="/assets/BannerDownloaded/career.jpg"
        heading="Skytech - Technology & IT Solutions"
        desc="At SKYTech. we are more than a development firm we are your partners in turning ideas into powerful solutions. With a team of dedicated professionals, we combine cutting-edge technology with creative expertise to craft software that drives growth and transforms industries."
      />
      <div className="professionalTeamGrid container py-5">
        <img src={img} alt="" />
        <div className="professionalTeamDetails">
          <h1>Join our professional team today</h1>
          <p className="text-muted">
            Are you ready to embark on an exciting journey where innovation,
            collaboration, and personal growth are at the heart of everything we
            do? Look no further! We are thrilled to invite dynamic individuals
            to join our exceptional team and be a part of something
            extraordinary.
          </p>
          <Link className="text-decoration-none text-primary" to="/Contact">
            <h4>&gt; Contact Us</h4>
          </Link>
        </div>
      </div>
      <section className="career-options container">
        <h1>
          Join our family now and become part of our{" "}
          <span className="text-primary">amazing team</span>
        </h1>
        {/* <div class="file-upload-container">
    <input type="file" id="cv-upload" />
    <label for="cv-upload"></label>
  </div> */}

        <hr />

   
        <Services data={ServicesData} />
      </section>
      <Readytowork/>
      {/* <div className="readyToWork">
        <h1 className="careerHeading">Ready to work with us?</h1>
        <p>
          If you are passionate to work with us, have a keen eye for detail, and
          thrive in a collaborative environment, we invite you to apply and
          contribute to the success of our projects.
        </p>

        <Link
          className="text-decoration-none bg-primary text-white py-2 px-4 rounded"
          to="/contact"
        >
          Contact us now
        </Link>
      </div> */}
      <TrustedPartner />
    </>
  );
};

export default Career;
