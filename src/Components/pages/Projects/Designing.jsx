import React from "react";
// import Navbar from "../../Navbar";
import Hero from "../../Hero";
import '../../Styles/DigitalPartner.css'

import Slider from "react-slick";
import img1 from "../../../../public/assets/Design/img1.jpg";
import img2 from "../../../../public/assets/Design/img2.jpg";
import img3 from "../../../../public/assets/Design/img3.jpg";
import img4 from "../../../../public/assets/Design/img4.jpg";
import img5 from "../../../../public/assets/Design/img5.jpg";
import img6 from "../../../../public/assets/Design/img6.jpg";
import img7 from "../../../../public/assets/Design/img7.jpg";
import img8 from "../../../../public/assets/Design/img8.jpg";
import img9 from "../../../../public/assets/Design/img9.jpg";
import img10 from "../../../../public/assets/Design/img10.jpg";
import img11 from "../../../../public/assets/Design/img11.jpg";
import img12 from "../../../../public/assets/Design/img12.jpg";
import img13 from "../../../../public/assets/Design/img13.jpg";
import img14 from "../../../../public/assets/Design/img14.jpg";
import img15 from "../../../../public/assets/Design/img15.jpg";
import img16 from "../../../../public/assets/Design/img16.jpg";
import img17 from "../../../../public/assets/Design/img17.jpg";
import img18 from "../../../../public/assets/Design/img18.jpg";
import img19 from "../../../../public/assets/Design/img19.jpg";
import img20 from "../../../../public/assets/Design/img20.jpg";
import img21 from "../../../../public/assets/Design/img21.jpg";
import img22 from "../../../../public/assets/Design/img22.jpg";
import img23 from "../../../../public/assets/Design/img23.jpg";
import img24 from "../../../../public/assets/Design/img24.jpg";
import img25 from "../../../../public/assets/Design/img25.jpg";
import img26 from "../../../../public/assets/Design/img26.jpg";
import img27 from "../../../../public/assets/Design/img27.jpg";
import img28 from "../../../../public/assets/Design/img28.jpg";
import img29 from "../../../../public/assets/Design/img29.jpg";
import img30 from "../../../../public/assets/Design/img30.jpg";
import img31 from "../../../../public/assets/Design/img31.jpg";
import img32 from "../../../../public/assets/Design/img32.jpg";
import img33 from "../../../../public/assets/Design/img33.jpg";
import img34 from "../../../../public/assets/Design/img34.jpg";
import img35 from "../../../../public/assets/Design/img35.jpg";
import img36 from "../../../../public/assets/Design/img36.jpg";
import img37 from "../../../../public/assets/Design/img37.jpg";
import img38 from "../../../../public/assets/Design/img38.jpg";
import img39 from "../../../../public/assets/Design/img39.jpg";
import img40 from "../../../../public/assets/Design/img40.jpg";
import img41 from "../../../../public/assets/Design/img41.jpg";
import img42 from "../../../../public/assets/Design/img42.jpg";
import img43 from "../../../../public/assets/Design/img43.jpg";
import img44 from "../../../../public/assets/Design/img44.jpg";
import img45 from "../../../../public/assets/Design/img45.jpg";
import img46 from "../../../../public/assets/Design/img46.jpg";
// import img47 from "../../../../public/assets/Design/img47.jpg";
// import img48 from "../../../../public/assets/Design/img48.jpg";
// import img49 from "../../../../public/assets/Design/img49.jpg";
// import img50 from "../../../../public/assets/Design/img50.jpg";
// import Footer from "../../footer";
import design from "../../../../public/assets/heros/porjectdesign.png";

const Designing = () => {
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
    img7: img7,
    img8: img8,
    img9: img9,
    img10: img10,
    img11: img11,
  };
  const data1 = {
    img12: img12,
    img13: img13,
    img14: img14,
    img15: img15,
    img16: img16,
    img17: img17,
    img18: img18,
    img19: img19,
    img20: img20,
    img21: img21,
  };
  const data2 = {
    img22: img22,
    img23: img23,
    img24: img24,
    img25: img25,
    img26: img26,
    img27: img27,
    img28: img28,
    img29: img29,
    img30: img30,
    img31: img31,
  };

  const data3 = {
    img32: img32,
    img33: img33,
    img34: img34,
    img35: img35,
    img36: img36,
    img37: img37,
    img38: img38,
    img39: img39,
    img40: img40,
  };

  const data4 = {
    img41: img41,
    img42: img42,
    img43: img43,
    img44: img44,
    img45: img45,
    img46: img46,
  };

  return (
    <>
     {/* <Navbar /> */}
     <Hero
        img={design}
        heading="Innovative Designs That Speak to Your Audience"
        desc="SkyTech's design solutions blend creativity with strategy to deliver visually compelling experiences. From branding to UI/UX, we create designs that engage, inspire, and leave a lasting impression on your audience."
      />
      <div className="slick-container digitallImgContainer">
        <h1 className="digital-heading">
          <span style={{ color: "#149AF3"  }}>Air</span> Foundation School
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data.img1} alt="image" />
          <img src={data.img2} alt="image" />
          <img src={data.img3} alt="image" />
          {/* Add more images as needed */}
        </Slider>
      </div>
      <div className="slick-container">
        <h1 className="digital-heading">
          <span style={{ color: "#149AF3" }}>Tech</span> Connective
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data1.img12} alt="image" />
          <img src={data1.img13} alt="image" />
          <img src={data1.img14} alt="image" />
          <img src={data1.img15} alt="image" />
          <img src={data1.img16} alt="image" />
          <img src={data1.img17} alt="image" />
          <img src={data1.img18} alt="image" />
          <img src={data1.img19} alt="image" />
          <img src={data1.img20} alt="image" />
          <img src={data1.img21} alt="image" />
        </Slider>
      </div>
      <div className="slick-container">
        <h1 className="digital-heading">
          <span style={{ color: "#149AF3" }}> Proptech </span>Convention 2023
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data2.img22} alt="image" />
          <img src={data2.img23} alt="image" />
          <img src={data2.img24} alt="image" />
          <img src={data2.img25} alt="image" />
          <img src={data2.img26} alt="image" />
          <img src={data2.img27} alt="image" />
          <img src={data2.img28} alt="image" />
          <img src={data2.img29} alt="image" />
          <img src={data2.img30} alt="image" />
          <img src={data2.img31} alt="image" />
        </Slider>
      </div>
      <div className="slick-container">
        <h1 className="digital-heading">
          <span style={{ color: "#149AF3" }}>Sky</span>Mart
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data3.img32} alt="image" />
          <img src={data3.img33} alt="image" />
          <img src={data3.img34} alt="image" />
          <img src={data3.img35} alt="image" />
          <img src={data3.img36} alt="image" />
          <img src={data3.img37} alt="image" />
          <img src={data3.img38} alt="image" />
          <img src={data3.img39} alt="image" />
          <img src={data3.img40} alt="image" />
        </Slider>
      </div>
      <div className="slick-container">
        <h1 className="digital-heading">
          <span style={{ color: "#149AF3" }}>SKY</span>Tech.
        </h1>
        <Slider className="mt-5" {...settings}>
          <img src={data4.img41} alt="image" />
          <img src={data4.img42} alt="image" />
          <img src={data4.img43} alt="image" />
          <img src={data4.img44} alt="image" />
          <img src={data4.img45} alt="image" />
          <img src={data4.img46} alt="image" />
        </Slider>
      </div>
   
    </>
  );
};

export default Designing;
