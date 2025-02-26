import check from "../../pages/About/check.png";
import slid from "../../pages/About/slid.png";
import kaam from "../../pages/About/kaam.jpg";
import Logo from "../../../../public/assets/About/sklogo.jpg";
import mission from "../../../../public/assets/About/mission.png";
import Vision from "../../../../public/assets/About/vision.png";

// import kaam1 from "../../pages/About/kaam1.jpg";
import skyTech from "../../../../public/assets/About/logo.webp";
import "../../Styles/TextSection.css";
import SkytehName from "../../pages/About/SkytehName";

import Aos from "aos";
import { TypeAnimation } from "react-type-animation";
// import SkytechUp from "../Services/Skytech";
import { useEffect } from "react";

const TextSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: false,
        });
    });
    return (
        <>
            <div className="aboutMainContainer ">
                <div className="container0aboutSec">
                    <div className="logoAbout">
                        <img src={skyTech} alt="" />
                    </div>
                    <p className="objectiveContaint">
                        <div className="objectiveHeading text-primary text-center mb-5">
                        
                        <SkytehName/>
                            <TypeAnimation
                                sequence={[
                                 " Crafting Digital Futures, Delivering Excellence",
                                    1000,
                                    "",
                                    500,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ color: "#149af3", fontWeight: "bold" }}
                                repeat={Infinity}
                            />{" "}
                        </div>
                        <div className="Aboutpara">
                        At <SkytehName />, we don't just build software; we build solutions.
                        We're a dedicated software house committed to providing top-tier
                        digital services, from web development and ERP solutions to custom
                        software and web applications. We believe that quality is paramount
                        and that every line of code should reflect{" "}
                       
                            our dedication to excellence. We're not just meeting expectations;
                            we're exceeding them
                        </div>
                    </p>
                </div>

                <div className="aboutSec3">
                    {/* Mission Section */}
                    <div className="boxc" data-aos="fade-right">
                        <img className="mv" src={mission} alt="Mission" />
                        <div className="divcontent">
                            <span className="vision  text-primary">Our  <span className="text-black"> Story</span> (Mission)

                            </span>
                            <div className="textMission">
                                <SkytehName /> mission is to empower businesses through innovative and reliable digital solutions. We strive to understand our clients' unique challenges and craft tailored software that streamlines operations, enhances productivity, and drives growth. We are committed to delivering exceptional value through cutting-edge technology and unwavering dedication to quality.
                            </div>
                        </div>
                    </div>

                    <div className="imagelog" data-aos="zoom-in">
                        <img src={Logo} alt="Logo" />
                    </div>

                    {/* Vision Section */}
                    <div className="boxc" >
                        <img className="mv" src={Vision} alt="Vision" />
                        <div className="divcontent">
                            <span className="vision text-primary">Our     <span className="text-black">Dream</span> (Vision)
                            </span>
                            <div className="textMission">
                                <SkytehName />
                                We envision a future where businesses of all sizes can leverage the power of technology to achieve their full potential.    <SkytehName /> aims to be a leading global software house, recognized for its commitment to quality, innovation, and client satisfaction. We see ourselves as partners in our clients' success, empowering them to thrive in the digital age.

                            </div></div>
                    </div>
             
                </div>
                <div className="container11aboutSec">
                    {/* <div className="box12aboutSec" data-aos="zoom-out-right">
                        <img src={slid} alt="image" />
                    </div> */}
                  <div className="box29aboutSec" data-aos="zoom-out-right">
                        <h1 className="headingText">
                            <strong className="yaaboutSec"> Delivering </strong>
                            <span>
                                Excellence <br /> To
                            </span> Our
                            <strong className="yaaboutSec"> Clients</strong>
                        </h1>
                        <span className="paboutSec">
                            The Pinnacle Quality in IT Services
                        </span>
                        <p className="textaboutDeliber">
                            At <SkytehName />, we’re not just a Software house. We’re obsessed
                            with excellence, and that obsession fuels our mission: to be your
                            strategic partner in achieving greatness. Every interaction, every
                            project, every solution we deliver is a testament to our
                            unwavering commitment to your success.
                        </p>
                    </div>
                    <div className="line"></div>
                    <div className="box22aboutSec" data-aos="zoom-out-left">
                        <h1 className="headingText">
                            We're Focused On <strong className="yaaboutSec">Your</strong>
                            <br /> and <strong className="yaaboutSec">Business</strong>{" "}
                            Success
                        </h1>
                        <p>
                            Your business success is our sole focus. We're committed to
                            delivering solutions that drive your growth and prosperity.
                        </p>
                        <ul className="commaboutSec">
                            <li>
                                <img src={check} alt="icon" /> E-Commerce Solutions
                            </li>
                            <li>
                                <img src={check} alt="icon" /> Software Development & Digital
                                Marketing Services
                            </li>
                            <li>
                                <img src={check} alt="icon" /> IT Consulting & ERP Consulting
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="container17aboutSec">
                    <div className="box29aboutSec" data-aos="zoom-out-right">
                        <h1 className="headingText">
                            <strong className="yaaboutSec"> Delivering </strong>
                            <span>
                                Excellence <br /> To
                            </span> Our
                            <strong className="yaaboutSec"> Clients</strong>
                        </h1>
                        <span className="paboutSec">
                            The Pinnacle Quality in IT Services
                        </span>
                        <p className="textaboutDeliber">
                            At <SkytehName />, we’re not just a Software house. We’re obsessed
                            with excellence, and that obsession fuels our mission: to be your
                            strategic partner in achieving greatness. Every interaction, every
                            project, every solution we deliver is a testament to our
                            unwavering commitment to your success.
                        </p>
                    </div>

                    <div className="box10aboutSec" data-aos="zoom-out-left">
                        <img src={kaam} alt="image" />
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default TextSection;
