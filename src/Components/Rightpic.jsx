import React, { useEffect } from 'react';
import './Styles/rightpic.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Rightpic = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'fade-left',
      once: true
    });
  })
  return (
    <section className="custom-section">
      <div className="custom-container">
     
        <div className="custom-column custom-column-left">
          <div className="custom-text animated fadeInLeft">
            <h2>
              Empowering <span className="highlight-text">Success With Tailored</span> IT Solutions At SKY
              <span className="highlight-text">TECH Dot</span> Software House
            </h2>
          </div>
          <div className="custom-text animated fadeInLeft">
            <p className='rightText'>
              At SKYTech, we take pride in our expert team’s understanding that each business is distinctive.
              Our commitment lies in providing personalized IT solutions crafted to meet your specific needs and
              goals. Whether you require top-notch Business Profile development, Graphic Designing, or Advanced
              Data Analytics, our team possesses the expertise to propel your business forward. Partnering with
              SKYTech ensures you experience the remarkable impact of bespoke IT solutions that not only meet but
              exceed your expectations, driving unparalleled success.
            </p>
          </div>
        </div>

  
        <div className="custom-column custom-column-right">
          <div className="custom-image animated fadeInLeft"  data-aos="fade-left">
       
            <img data-aos="fade-left" src="https://www.skytech.com.pk/wp-content/uploads/2023/11/Business-support-amico-1024x1024.png.webp" alt="Business Support Image" className="responsive-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rightpic;
