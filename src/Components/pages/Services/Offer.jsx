import React, { useEffect } from "react";
import { Link, } from "react-router-dom";
import confetti from "canvas-confetti";
import { FaCircleRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { RxDotFilled } from "react-icons/rx";
import "../../Styles/Offer2.css";

const ServicesOffers = () => {


  const startConfetti = () => {
    const duration = 10000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 15,
        startVelocity: 50,
        spread: 70,
        origin: {
          x: Math.random(),
          y: Math.random() * 3,
        },
        gravity: 0.4,
        ticks: 150,
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  useEffect(() => {
      const confettiTimeout = setTimeout(() => {
        startConfetti();
      }, 1000);

      return () => clearTimeout(confettiTimeout);
    }
  )
  const specialOffer = [
    {
      id: 1,
      name: "Graphic Design",
      paragraph:
        "Subscribe to our Creative Design Package for PKR 50,000/month, including:",
      list: ["2 Posters", "1 Logo", "5 Social Media Posts", "1 Banner"],
      sky: "SKY",
      tech: "tech",
      dot: <RxDotFilled />,
    },
    {
      id: 2,
      name: "Graphic Design",
      paragraph:
        "Subscribe to our Creative Design Package for PKR 50,000/month, including:",
      list: ["2 Posters", "1 Logo", "5 Social Media Posts", "1 Banner"],
    },
    {
      id: 3,
      name: "Graphic Design",
      paragraph:
        "Subscribe to our Creative Design Package for PKR 50,000/month, including:",
      list: ["2 Posters", "1 Logo", "5 Social Media Posts", "1 Banner"],
    },
    {
      id: 4,
      name: "Graphic Design",
      paragraph:
        "Subscribe to our Creative Design Package for PKR 50,000/month, including:",
      list: ["2 Posters", "1 Logo", "5 Social Media Posts", "1 Banner"],
    },
    {
      id: 5,
      name: "Graphic Design",
      paragraph:
        "Subscribe to our Creative Design Package for PKR 50,000/month, including:",
      list: ["2 Posters", "1 Logo", "5 Social Media Posts", "1 Banner"],
    },
  ];

  return (
    <div className="services-offers2">
      <div className="containerOffer">
        <h1>
          <TypeAnimation
            sequence={["Special Offer", 1000, "", 500]}
            wrapper="span"
            speed={50}
            style={{ color: "#007bff", fontWeight: "bold" }}
            repeat={Infinity}
          />
        </h1>
      </div>
      {specialOffer.map((offer) => (
        <div className="offer-boxes animated-box" key={offer.id}>
          <div className="offer-title2 animated-title">{offer.name}</div>
          <div className="offer-paragraph2 animated-paragraph">
            {offer.paragraph}
          </div>
          <ul className="offer-list2">
            {offer.list.map((item, idx) => (
              <li key={idx} className="offer-item">
                <Link to="/contact" className="offer-link animated-link">
                  <FaCircleRight className="price-icon animated-icon" />
                  <span className="actual-price">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="offerBtn">
            <Link to="/Contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesOffers;
