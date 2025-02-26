import React from "react";
import "./Styles/backgroundCard.css";
// import img from "../../public/assets/background/image1.jpg";

const backgroundCard = () => {
  return (
    <>
      <section className="services-section mt-5">
        <h2 className="text-white text-center mb-5">
          Aspiring To Lead, Committed To Excellence
        </h2>
        <div className="services-container containerr">
          <div className="service-card service-card1">
            <div className="service-card-text">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h2 className="service-title text-white">
                <a href="https://www.skytech.com.pk/business-profile-development/">
                  Development Solutions
                </a>
              </h2>
              <p className="service-description text-white">
                At SKYTech, we turn ideas into reality. We’re here to elevate
                your business. Empower your vision today.
              </p>
            </div>
          </div>

          <div className="service-card  service-card2">
            <div className="service-card-text">
              <div className="service-icon">
                <i className="fas fa-bezier-curve"></i>
              </div>
              <h2 className="service-title text-white">
                <a href="https://www.skytech.com.pk/graphic-designing/">
                  Creative Design Services
                </a>
              </h2>
              <p className="service-description text-white">
                Transform your brand’s essence with SKYTech’s innovative design
                services. From captivating ...
              </p>
            </div>
          </div>

          <div className="service-card service-card3">
            <div className="service-card-text">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2 className="service-title text-white">
                <a href="https://www.skytech.com.pk/digital-marketing-service/">
                  Digital Marketing Solutions
                </a>
              </h2>
              <p className="service-description text-white">
                Amplify your reach with SKYTech’s marketing expertise. Elevate
                your brand and connect with your audience effectively.
              </p>
            </div>
          </div>

          <div className="service-card service-card4">
            <div className="service-card-text">
              <div className="service-icon">
                <i className="fas fa-bug"></i>
              </div>
              <h2 className="service-title text-white">
                <a href="https://www.skytech.com.pk/business-consulting/">
                  Business Consulting Services
                </a>
              </h2>
              <p className="service-description text-white">
                Empower your business with SKYTech’s comprehensive services.
                Unlock growth potential and achieve your goals with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default backgroundCard;
