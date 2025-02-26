import React, { useEffect, useState } from "react";
import "./Styles/banner2.css";

const Banner2 = () => {
  const [projects, setProjects] = useState(1);
  const [clients, setClients] = useState(1);
  const [technologies, setTechnologies] = useState(1);
  const [reviews, setReviews] = useState(1);

  useEffect(() => {
    const timer1 = setInterval(() => {
      if (projects < 100) setProjects((prev) => prev + 1);
    }, 66);

    const timer2 = setInterval(() => {
      if (clients < 99) setClients((prev) => prev + 1);
    }, 66);

    const timer3 = setInterval(() => {
      if (technologies < 20) setTechnologies((prev) => prev + 1);
    }, 66);

    const timer4 = setInterval(() => {
      if (reviews < 30) setReviews((prev) => prev + 1);
    }, 66);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, [projects, clients, technologies, reviews]);

  return (
    <section className="custom-section bg-primary">
      <div className="custom-container">
        <div className="custom-column">
          <div className="counter">
            <i className="fa-solid fa-list-check"></i>
            <div className="counter-title text-white">Completed Projects</div>
            <div className="counter-number-wrapper">
              <span className="counter-number text-white fw-bold">
                {projects}
              </span>
              <span className="counter-number-suffix text-white fw-bold">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="custom-column">
          <div className="counter">
            <i className="fa-solid fa-users"></i>
            <div className="counter-title text-white">Satisfied Clients</div>
            <div className="counter-number-wrapper text-white">
              <span className="counter-number text-white fw-bold">
                {clients}
              </span>
              <span className="counter-number-suffix text-white">.9%</span>
            </div>
          </div>
        </div>

        <div className="custom-column">
          <div className="counter">
            <i className="fa-solid fa-microchip"></i>
            <div className="counter-title text-white">Modern Technologies</div>
            <div className="counter-number-wrapper">
              <span className="counter-number text-white fw-bold">
                {technologies}
              </span>
              <span className="counter-number-suffix text-white">+</span>
            </div>
          </div>
        </div>

        <div className="custom-column">
          <div className="counter">
            <i className="fa-solid fa-user-tie"></i>
            <div className="counter-title text-white">Worldwide Clients</div>
            <div className="counter-number-wrapper">
              <span className="counter-number text-white fw-bold">
                {reviews}
              </span>
              <span className="counter-number-suffix text-white">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
