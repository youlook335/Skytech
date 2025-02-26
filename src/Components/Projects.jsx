import React, { useEffect } from 'react';
import './Styles/Projects.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import servicework from "../../public/assets/servicework.webp";
import servicework1 from "../../public/assets/servicework1.webp";
import servicework2 from "../../public/assets/servicework2.webp";
import servicework3 from "../../public/assets/servicework3.webp";
import servicework4 from "../../public/assets/servicework4.webp";
import servicework5 from "../../public/assets/servicework5.webp";
import servicework6 from "../../public/assets/servicework6.webp";
import servicework7 from "../../public/assets/servicework7.webp";
import servicework8 from "../../public/assets/servicework8.webp";
import servicework9 from "../../public/assets/servicework9.webp";
import servicework10 from "../../public/assets/servicework10.webp";
import servicework11 from "../../public/assets/servicework11.webp";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

  const projectData = {
    "Social Media": [servicework11, servicework10, servicework9],
    "Graphic Designing": [servicework1, servicework5, servicework3],
    "Video Editing": [servicework7, servicework8, servicework6],
    "SEO": [servicework, servicework2, servicework4]
  };

  return (
    <> 
      <div className="headingHome" data-aos="fade-down">  
        <h2 className="text-center ">
          <span className="text-primary">Our</span> Projects
        </h2>
      </div>
      <div className="projectMainContainer">
        {Object.entries(projectData).map(([category, images]) => (
          <div className="project-column" key={category} data-aos="fade-up">
            <div className='projectHeading text-primary text-center' data-aos="zoom-in">{category}</div> 
            <div className="project-items">
              {images.map((img, idx) => (
                <img key={idx} src={img} alt="" data-aos="flip-up" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
