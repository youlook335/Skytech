import React from "react";
import Navbar from "../Navbar";
import Services from "../Services";
import Projects from "../Projects";
import Coment from "../Coment";
import BackgroundCard from "../backgroundCard";
import Banner from "../Banner";
import Rightpic from "../Rightpic";
import Banner2 from "../Banner2";
import Faq from "../FAQ";
import Happyclint from "../../Components/pages/marque/Happyclint";
// import Trustedpatners from "../../Components/pages/marque/Turstedpatners";
import VideoSlider from "../VideoSlider";
import TechStack from "./Services/Techstak";
// import Footer from "../footer";

const Home = () => {
  const ServicesData = [
    {
      heading: "Web & E-Commerce Solutions",
      Description:
        "We create dynamic websites and mobile apps tailored to your business, offer e-commerce solutions with a seamless user experience.",
      img: "/assets/webpic.png",
      btn: "Learn more",
      appLink: "/WebDevelopment",
    },
    {
      heading: "Digital Marketing",
      Description:
        "Our digital marketing services are designed to elevate your brand's visibility online.",
      img: "/assets/digitalpic.png",
      btn: "Learn more",
      appLink: "/DigitalMarketing",
    },
    {
      heading: "Graphic Designing & Video Editing",
      Description:
        "Our expert graphic designers and video editors create visually stunning content that captures attention.",
      img: "/assets/designing.png",
      btn: "Learn more",
      appLink: "/GraphicDesignings",
    },
    {
      heading: "Custom Software Development",
      Description:
        "We build tailored software solutions to fit your business needs and ensure seamless performance.",
      img: "/assets/custom.png",
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
    <div>
      {/* <Navbar /> */}
      <VideoSlider />
      <Services data={ServicesData} />
      <Projects />
      <BackgroundCard />
      <Banner />
      <TechStack />
      <Rightpic />
      <Happyclint />
      {/* <Trustedpatners /> */}
      <Banner2 />
      <Faq />
      <Coment />
      {/* // */}
    </div>
  );
};

export default Home;
