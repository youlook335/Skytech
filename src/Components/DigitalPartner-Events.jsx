import "./Digital.css";
import React from "react";
import Slider from "react-slick";
import img1 from "../../public/assets/digital/img1.jpeg";
import img2 from "../../public/assets/digital/img2.jpeg";
import img3 from "../../public/assets/digital/img3.jpeg";
import img4 from "../../public/assets/digital/img4.jpeg";
import img5 from "../../public/assets/digital/img5.jpeg";
import img6 from "../../public/assets/digital/img6.jpeg";
import img7 from "../../public/assets/digital/img7.jpeg";
import img8 from "../../public/assets/digital/img8.jpeg";
import img9 from "../../public/assets/digital/img9.jpeg";
import img10 from "../../public/assets/digital/img10.jpeg";
import img11 from "../../public/assets/digital/img11.jpeg";
import img12 from "../../public/assets/digital/img12.jpeg";
import img13 from "../../public/assets/digital/img13.jpeg";
import IMG14 from "../../public/assets/digital/IMG14.jpeg";
import img15 from "../../public/assets/digital/img15.jpeg";
import img16 from "../../public/assets/digital/img16.jpeg";
import img17 from "../../public/assets/digital/img17.jpeg";
import img18 from "../../public/assets/digital/img18.jpeg";
import img19 from "../../public/assets/digital/img19.jpeg";
import img20 from "../../public/assets/digital/img20.jpeg";
import img21 from "../../public/assets/digital/img21.jpeg";
import img22 from "../../public/assets/digital/img22.jpeg";
import img23 from "../../public/assets/digital/img23.jpeg";
import img24 from "../../public/assets/digital/img24.jpeg";
import img25 from "../../public/assets/digital/img25.jpeg";
import img26 from "../../public/assets/digital/img26.jpeg";
import img27 from "../../public/assets/digital/img27.jpeg";
import img28 from "../../public/assets/digital/img28.jpeg";
import img29 from "../../public/assets/digital/img29.jpeg";
import img30 from "../../public/assets/digital/img30.jpeg";
import img31 from "../../public/assets/digital/img31.jpeg";
import img32 from "../../public/assets/digital/img32.jpeg";
import img33 from "../../public/assets/digital/img33.jpeg";
import img34 from "../../public/assets/digital/img34.jpeg";
import img35 from "../../public/assets/digital/img35.jpeg";
import img36 from "../../public/assets/digital/img36.jpeg";
import img37 from "../../public/assets/digital/img37.jpeg";
import img38 from "../../public/assets/digital/img38.jpeg";
import img39 from "../../public/assets/digital/img39.jpeg";
import img40 from "../../public/assets/digital/img40.jpeg";
import img41 from "../../public/assets/digital/img41.jpeg";
import img42 from "../../public/assets/digital/img42.jpeg";
import img43 from "../../public/assets/digital/img43.jpeg";
import img44 from "../../public/assets/digital/img44.jpeg";
// import Navbar from "./Navbar";
import Hero from "./Hero";
// import Footer from "./Footer";
import digitalpatners from '../../public/assets/heros/digitalpatners.jpg'

const Digital = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,  // Default to 3 images per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,  // On screens 768px and below
        settings: {
          slidesToShow: 1,  // Show 1 image per slide on mobile
          slidesToScroll: 1,
          dots: true,  // Enable dots for easier navigation
        },
      },
    ],
  };

  const data = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  };
  const data1 = {
    img7: img7,
    img8: img8,
    img9: img9,
    img10: img10,
    img11: img11,
    img12: img12,
    img13: img13,
    IMG14: IMG14,
  };
  const data2 = {
    img15: img15,
    img16: img16,
    img17: img17,
    img18: img18,
    img19: img19,
    img20: img20,
    img21: img21,
    img22: img22,
    img23: img23,
  };
  const data3 = {
    img25: img25,
    img26: img26,
    img24: img24,

  };

  const data4 = {

    img28: img28,
    img29: img29,
  
    img27: img27,
    img30: img30,
  };
  const data5 = {
    img31: img31,
    img32: img32,
    img33: img33,
    img34: img34,
    img35: img35,
    img36: img36,
  };
  const data6 = {
    img37: img37,
    img38: img38,
    img39: img39,
    img40: img40,
    img41: img41,
    img42: img42,
    img43: img43,
    img44: img44,
  };
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        img={digitalpatners}
        heading="Empowering Businesses Through Digital Collaboration"
        desc="SkyTech's Digital Partners Event is designed to connect businesses with industry leaders and digital innovators. We bring together expertise, networking, and insights to help you stay ahead in the digital landscape  "
      />
      <div className="slick-container">
        <h1 className="digital-heading">
          Served as Digital Partner at Rotary's Annual Event HOPECON'2024
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data.img1} alt="image" />
          <img src={data.img2} alt="image" />
          <img src={data.img3} alt="image" />
          <img src={data.img4} alt="image" />
          <img src={data.img5} alt="image" />
          <img src={data.img6} alt="image" />
        </Slider>
      </div>

      <div className="slick-container mt-5">
        <h1 className="digital-heading">
          Interfaith Meeting Hosted By America Pakistan Business Development
          Forum
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data1.img7} alt="image" />
          <img src={data1.img8} alt="image" />
          <img src={data1.img9} alt="image" />
          <img src={data1.img10} alt="image" />
          <img src={data1.img11} alt="image" />
          <img src={data1.img12} alt="image" />
          <img src={data1.img13} alt="image" />
          <img src={data1.IMG14} alt="image" />
        </Slider>
      </div>

      <div className="slick-container mt-5">
        <h1 className="digital-heading">
          Celebration of 1st Anniversary of Rotary District Secretariat 3271
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data2.img15} alt="image" />
          <img src={data2.img16} alt="image" />
          <img src={data2.img17} alt="image" />
          <img src={data2.img18} alt="image" />
          <img src={data2.img19} alt="image" />
          <img src={data2.img20} alt="image" />
          <img src={data2.img21} alt="image" />
          <img src={data2.img22} alt="image" />
          <img src={data2.img23} alt="image" />
        </Slider>
      </div>

      <div className="slick-container mt-5">
        <h1 className="digital-heading">Intercity Meeting</h1>
        <Slider className="mt-5" {...settings}>
          <img src={data3.img24} alt="image" />
          <img src={data3.img25} alt="image" />
          <img src={data3.img26} alt="image" />
        </Slider>
      </div>

      <div className="slick-container mt-5">
        <h1 className="digital-heading">
          Teachers Training Session in Air Foundation School Gulshan Campus
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data4.img27} alt="image" />
          <img src={data4.img28} alt="image" />
          <img src={data4.img29} alt="image" />
          <img src={data4.img30} alt="image" />
        </Slider>
      </div>
      <div className="slick-container mt-5">
        <h1 className="digital-heading">Empower Her</h1>
        <Slider className="mt-5" {...settings}>
          <img src={data5.img31} alt="image" />
          <img src={data5.img32} alt="image" />
          <img src={data5.img33} alt="image" />
          <img src={data5.img34} alt="image" />
          <img src={data5.img35} alt="image" />
          <img src={data5.img36} alt="image" />
        </Slider>
      </div>
      <div className="slick-container mt-5">
        <h1 className="digital-heading">
          Rotary Climate Change Conference and Awards
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data6.img37} alt="image" />
          <img src={data6.img38} alt="image" />
          <img src={data6.img39} alt="image" />
          <img src={data6.img40} alt="image" />
          <img src={data6.img41} alt="image" />
          <img src={data6.img42} alt="image" />
          <img src={data6.img43} alt="image" />
          <img src={data6.img44} alt="image" />
        </Slider>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Digital;
