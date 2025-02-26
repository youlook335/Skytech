import React from 'react';
import './Styles/hero.css';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            {props.video ? (
              // Render video if video prop exists
              <video
                className="d-block w-100"
                src={props.video}
                autoPlay
                loop
                muted
              />
            ) : (
              // Render image if no video prop is provided
              <img src={props.img} className="d-block w-100" alt="banner" />
            )}
            <div className="banner-text-div">
              <h5>{props.heading}</h5>
              <p className="heropara">{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
