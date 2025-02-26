import React from 'react'
import Hero from './Hero'
import Rightpic from './Rightpic'
import './web.css'
import design from '../../public/assets/About/AboutBanner.webp'

const Websites = () => {

  const projects = [
    { url: 'https://menaproptech.com/', imgSrc: '/assets/project1.webp' },
    { url: 'https://menaproptech.com/', imgSrc: '/assets/project2.webp' },
    { url: 'https://skytechmart.com.pk/password', imgSrc: '/assets/project3.png' },
    { url: 'https://themeforskymart.myshopify.com/password', imgSrc: '/assets/project4.png' },
    { url: 'https://ftbls.org/', imgSrc: '/assets/project5.webp' },
    { url: 'https://askminerals.com/', imgSrc: '/assets/project6.webp' },
    { url: 'https://datatrack.pk/cgi-sys/defaultwebpage.cgi', imgSrc: '/assets/project7.webp' },
    { url: 'https://dev-daniyal-store.pantheonsite.io/', imgSrc: '/assets/project8.png' },
    { url: 'http://farmart.42web.io/?i=1', imgSrc: '/assets/project9.png' },
    { url: 'https://dev-eduio.pantheonsite.io/', imgSrc: '/assets/project10.png' },
    { url: 'https://dev-secondio.pantheonsite.io/', imgSrc: '/assets/project11.png' },
    { url: 'https://dev-infoeduio.pantheonsite.io/', imgSrc: '/assets/project12.png' },
    { url: 'http://daniyalahmed.rf.gd/?i=1', imgSrc: '/assets/project13.png' },
    { url: 'https://dev-hotbite.pantheonsite.io/', imgSrc: '/assets/project14.png' },
    { url: 'https://dev-st-business.pantheonsite.io/', imgSrc: '/assets/project15.png' },
    { url: 'https://dev-restarora.pantheonsite.io/', imgSrc: '/assets/project1.webp' },
    { url: 'https://dev-restaurantus.pantheonsite.io/', imgSrc: '/assets/project16.png' },
    { url: 'https://dev-khanportolio.pantheonsite.io/', imgSrc: '/assets/project17.png' },
    { url: 'https://dev-portfolio-zone.pantheonsite.io/', imgSrc: '/assets/project18.png' },
    { url: '#', imgSrc: '/assets/project19.png' },
    { url: '#', imgSrc: '/assets/project20.png' },
    { url: '/', imgSrc: '/assets/project21.png' },
    { url: '/', imgSrc: '/assets/project22.webp' },
    { url: '/', imgSrc: '/assets/project23.png' }
  ];

  const renderProjectCards = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
        <div className="project-content">
          <a href={project.url}>
            <img src={project.imgSrc} alt={`Project ${index + 1}`} className="img-fluid" />
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Hero section */}
      <Hero
        img={design}
        heading="Crafting High-Performance Websites for a Digital Future"
        desc="At SkyTech, we specialize in creating responsive, secure, and feature-rich websites that empower businesses to thrive online. Whether it's a corporate site, portfolio, or complex web application, we ensure seamless performance and a captivating user experience."
      />

      {/* Projects section */}
      <div className="container mt-5 mb-5">
        {/* Loop through projects and render rows */}
        <div className="row animate__animated animate__fadeInLeft">
          {renderProjectCards(projects.slice(0, 3))}
        </div>

        <div className="row animate__animated animate__fadeInRight">
          {renderProjectCards(projects.slice(3, 6))}
        </div>

        <div className="row animate__animated animate__fadeInLeft">
          {renderProjectCards(projects.slice(6, 9))}
        </div>

        <div className="row animate__animated animate__fadeInRight">
          {renderProjectCards(projects.slice(9, 12))}
        </div>

        <div className="row animate__animated animate__fadeInLeft">
          {renderProjectCards(projects.slice(12, 15))}
        </div>

        <div className="row animate__animated animate__fadeInRight">
          {renderProjectCards(projects.slice(15, 18))}
        </div>

        <div className="row animate__animated animate__fadeInLeft">
          {renderProjectCards(projects.slice(18))}
        </div>
      </div>

      {/* Rightpic section */}
      <Rightpic />
    </div>
  );
};

export default Websites;
