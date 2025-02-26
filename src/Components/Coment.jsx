import React, { useState } from "react";
import "./Styles/coment.css";

const Coments = () => {
  const data = [
    {
      // img: "/assets/coment.jpg",
      des: "The team at SKY Tech Dot is incredibly talented and dedicated. Their IT solutions have transformed our business operations.",
      name: "Mr. Atif Arfin – Land Track",
      img : "A",
      star: 5,
    },
    {
      // img: "/assets/coment.jpg",
      des: "SKY Tech Dot exceeded our expectations with their professional approach and timely delivery of our project. Highly recommended!",
      name: "Zara Khan",
      img : "Z",
      star: 5,
    },
   
    {
      // img: "/assets/coment.jpg",
      des: "I appreciate their ability to understand our needs and deliver creative and effective solutions. Outstanding work!",
      name: "Mr. Hanif Khan – Rotary International – District Governor 3271    ",
      img : "H",
      star: 5,
    },
    {
      // img: "/assets/coment.jpg",
      des: "Their commitment to empowering youth and creating sustainable solutions is truly inspiring. A pleasure to work with!",
      name: "Ms Naushad – TO District East",
      img : "N",
      star: 5,
    },
    {
      // img: "/assets/coment.jpg",
      des: "SKY Tech Dot provided exceptional support and communication throughout the project. We are thrilled with the results!",
      name: "Mr Syed Naseer Wajahat – GS AMPAK -BDF",
      img : "S",
      star: 5,
    },
    {
      // img: "/assets/coment.jpg",
      des: "Thanks to their expertise in web development and digital marketing, our online presence has improved significantly.",
      img : "A",
      name: "Dr, Aliya Ahsan –  Cardiologist",
      star: 5,
    },
    {
      // img: "/assets/coment.jpg",
      des: "The training sessions organized by SKY Tech Dot were impactful and well-structured, equipping our team with valuable IT skills.",
      name: "Mr Osama Bin Saleem – TrackPad ",
      img : "O",
      star: 5,
    },
    {
      // img: "/assets/coment.jpg",
      des: "They delivered innovative designs and ensured everything was SEO-friendly. Great attention to detail!",
      name: "Mr. Khalid Tech Connective ",
      img : "K",
      star: 4,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextComment = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevComment = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <>
      <div className="Comment-container ">
        <div className="row mt-5">
          <h1 className="text-center mt-5 mb-5 fw-bold">
            <span className="text-primary">Tes</span>Testimonial
          </h1>
          <div className="client-name-section col-md-5 col-sm-12  ">
         
            <h2>{data[index].name}</h2>
            <p></p>
          </div>

          <div id="card" className=" col-md-7 col-sm-12 mt-5  p-3">
            <div className="img-star">
              <div className="img">
                <div className="firstAlphaDiv"><p className="letter">{data[index].img}</p></div>
              </div>
              <div className="review">
                <span>
                  <i
                    className={
                      data[index].star > 0
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      data[index].star > 1
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      data[index].star > 2
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      data[index].star > 3
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      data[index].star > 4
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
              </div>
            </div>

            <div className="coment-content">
              
              <p>{data[index].des}</p>
              <h4>{data[index].name}</h4>
            </div>

            <div className="btns">
              <button
                onClick={prevComment}
                className="btn-arrow btn-outline-primary"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={nextComment}
                className="btn-arrow btn-outline-primary"
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coments;