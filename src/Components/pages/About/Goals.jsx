import React, { useEffect } from 'react';
import { FaCogs, FaHandshake, FaChartLine, FaUserGraduate, FaLightbulb } from 'react-icons/fa'; 
import './Goals.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const goals = [
  {
    title: "Deliver Superior Software Solutions",
    description: "Develop and implement high-quality software products and services that meet and exceed client expectations.",
    icon: <FaCogs />
  },
  {
    title: "Build Strong Client Relationships",
    description: "Foster long-term partnerships with clients by providing exceptional service and support.",
    icon: <FaHandshake />
  },
  {
    title: "Expand Market Reach",
    description: "Increase our presence in key markets and become a recognized leader in the software development industry.",
    icon: <FaChartLine />
  },
  {
    title: "Invest in Talent & Development",
    description: "Attract, retain, and develop top talent in the software development field.",
    icon: <FaUserGraduate />
  },
  {
    title: "Drive Innovation",
    description: "Continuously research and implement new technologies and methodologies to stay at the forefront of the industry.",
    icon: <FaLightbulb />
  }
];

const GoalsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 , once:false});
  }, []);

  return (
    <section className="goals-section">
        <h1 className="goalheading text-primary"> <span className='text-black'>Our </span> 
        Goals</h1>
        <br />
      <div className="goals-container">
        {goals.map((goal, index) => (
          <div 
            key={index} 
            className={`goal-item ${index % 2 === 0 ? 'left' : 'right'}`} 
            data-aos="fade-up"  // Animation on scroll for each goal
            data-aos-delay={index * 100}  // Add delay to each goal animation for a staggered effect
          >
            <div className="goal-icon-container">
              <span className="goal-icon">{goal.icon}</span>
            </div>
            <div className="goal-content">
              <h2 className="goal-title text-primary">{goal.title}</h2>
              <p className="goal-description">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoalsSection;
