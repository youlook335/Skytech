import React from 'react';
import slider1 from '../../../../public/assets/Vider/slidervideo-1.mp4';
import slider2 from '../../../../public/assets/Vider/Slidervideo-2.mp4';

const AboutHero = () => {
  return (
    <div>
      <header>
      </header>
      
      <main>
        <div id="carouselExample" className="carousel slide"> 
          <div className="carousel-inner">
            {/* Video Item 1 */}
            <div className="carousel-item ">
              <video style={{maxHeight:'100vh', width:'100vw', objectFit: 'cover'}} className="d-block" autoPlay muted loop>
                <source src={slider1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Item 2 */}
            <div className="carousel-item active">
              <video style={{maxHeight: '100vh', width:'100vw', objectFit: 'cover'}} className="d-block" autoPlay muted loop>
                <source src={slider2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>


          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      
      <footer>
      </footer>
    </div>
  );
};

export default AboutHero;