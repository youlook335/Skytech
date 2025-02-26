import React from 'react';
import './Services.css';

const Services = ({ heading, description }) => {  // Destructure props directly

  return (
    <>
    <div className="main">
      <div className="services-card">
        <h4 className='heading4'>{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
    </>
    
  );
}

export default Services;
