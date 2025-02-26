import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaNodeJs, FaPhp, FaDocker, FaAws, FaMicrosoft, FaGoogle } from 'react-icons/fa';

import './Techstake.css'; // Assuming you want to add custom styles
import { GiArtificialHive } from 'react-icons/gi';

const TechStack = () => {
  return (
    <section className="tech-stack">
      <h2>Our Technology Stack</h2>
      <p>We use modern, industry-leading technologies:</p>
      
      <div className="tech-stack-container">
        <div className="tech-item">
          <FaHtml5 size={50} color="#E34F26" />
          <h3>Frontend</h3>
          <p>HTML5, CSS3, JavaScript (React, Angular, Vue.js)</p>
        </div>
        <div className="tech-item">
          <FaNodeJs size={50} color="#68A063" />
          <h3>Backend</h3>
          <p>Python, Node.js, PHP, Ruby on Rails, .NET</p>
        </div>
        <div className="tech-item">
          <FaDocker size={50} color="#2496ED" />
          <h3>Databases</h3>
          <p>MySQL, PostgreSQL, MongoDB</p>
        </div>
        <div className="tech-item">
          <FaAws size={50} color="#FF9900" />
          <h3>Cloud Platforms</h3>
          <p>AWS, Azure, Google Cloud</p>
        </div>
        <div className="tech-item">
          <FaCss3Alt size={50} color="#1572B6" />
          <h3>Frontend</h3>
          <p>CSS3</p>
        </div>
        <div className="tech-item">
          <FaJsSquare size={50} color="#F7DF1E" />
          <h3>Frontend</h3>
          <p>JavaScript</p>
        </div>
        <div className="tech-item">
          <FaPython size={50} color="#3776AB" />
          <h3>Backend</h3>
          <p>Python</p>
        </div>
        <div className="tech-item">
          <FaPhp size={50} color="#777BB4" />
          <h3>Backend</h3>
          <p>PHP</p>
        </div>
        <div className="tech-item">
          <FaMicrosoft size={50} color="#00A4EF" />
          <h3>Cloud Platforms</h3>
          <p>Microsoft Azure</p>
        </div>
        <div className="tech-item">
          <FaGoogle size={50} color="#4285F4" />
          <h3>Cloud Platforms</h3>
          <p>Google Cloud</p>
        </div>
        
        <div className="tech-item">
          <GiArtificialHive size={50} color="#4285F4" />
          <h3>AI</h3>
          <p>Artificial Intelligence</p>
        </div>
         
      </div>
    </section>
  );
}

export default TechStack;
