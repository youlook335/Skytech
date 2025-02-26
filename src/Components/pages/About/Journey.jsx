import React, { useEffect } from "react";
import './Journey.css';
import Aos from "aos";
import "aos/dist/aos.css"; // Make sure AOS is installed
import {  FaLightbulb, FaRegBuilding, FaHandshake, FaGraduationCap } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const Journey = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS for smooth transitions
  }, []);

  const principles = [
    {
      icon: <FaRegBuilding />,  // Add the icon here
      title: "Uncompromising Quality",
      description:
        "We adhere to the highest standards of software development, ensuring every product we deliver is robust, reliable, and performs flawlessly.",
    },
    {
      icon: <FaUserGroup />,  // Add the icon here
      title: "Client-Centric Approach",
      description:
        "We prioritize understanding our clients' needs and building long-term relationships based on trust, transparency, and open communication.",
    },
    {
      icon: <FaLightbulb />,  // Add the icon here
      title: "Innovation & Expertise",
      description:
        "We constantly explore and adopt the latest technologies and methodologies to deliver cutting-edge solutions that meet the evolving needs of our clients.",
    },
    {
      icon: <FaHandshake />,  // Add the icon here
      title: "Integrity & Transparency",
      description:
        "We conduct our business with honesty and ethical practices. We believe in open communication and building trust with our clients and team members.",
    },
    {
      icon: <FaGraduationCap />,  // Add the icon here
      title: "Continuous Improvement",
      description:
        "We are committed to ongoing learning and development, constantly seeking ways to improve our processes, skills, and the value we provide to our clients.",
    },
  ];

  return (
    <div className="guiding-principles">
      <h2 className="section-title">Our <span className="text-primary">Guiding</span>   Principles <span className="text-primary"> (Values)</span></h2>
      <div className="timeline">
        {principles.map((principle, index) => (
          <div
            key={index}
            className={`timeline-item ${index }`} 
            data-aos="fade-up"
            data-aos-delay={index * 300} // Creates staggered effect
          >
            <div className="timeline-content">
              {/* Render the icon here */}
              <div className="principle-icon" style={{ fontSize: '30px', color: '#149af3', marginBottom: '10px' }}>
                {principle.icon}
              </div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
