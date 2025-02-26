import React, { useEffect, useState } from "react";
import "./Happyclinnt.css";
import Marquee from "react-fast-marquee";
import murque1 from "../../../../public/assets/Marquee/murquee1.png";
import murque2 from "../../../../public/assets/Marquee/murque2.png";
import murque3 from "../../../../public/assets/Marquee/murque3.png";
import murque4 from "../../../../public/assets/Marquee/murque4.png";
import murque5 from "../../../../public/assets/Marquee/murque5.png";
import murque6 from "../../../../public/assets/Marquee/marquee6.png";
import murque7 from "../../../../public/assets/Marquee/marquee7.png";
import murque8 from "../../../../public/assets/Marquee/marquee8.png";
import murque9 from "../../../../public/assets/Marquee/Marquee9.jpeg";
import murque10 from "../../../../public/assets/Marquee/Marquee10.jpeg";
import murque11 from "../../../../public/assets/Marquee/Marquee11.jpeg";
import murque12 from "../../../../public/assets/Marquee/Marquee12.jpeg";
import murque13 from "../../../../public/assets/Marquee/Marquee13.jpeg";
import Tursted2 from '../../../../public/assets/Marquee/Tursted2.webp';
import Tursted3 from '../../../../public/assets/Marquee/Tursted3.webp';
import Tursted6 from '../../../../public/assets/Marquee/Tursted6.png';
import Tursted7 from '../../../../public/assets/Marquee/Tursted7.webp';
import Tursted8 from '../../../../public/assets/Marquee/Tursted8.png';

const happyHome = [
  { img: murque1 },
  { img: murque2 },
  { img: murque3 },
  { img: murque4 },
  { img: murque5 },
  { img: murque6 },
  { img: murque7 },
  { img: murque8 },
  { img: murque9 },
  { img: murque10 },
  { img: murque11 },
  { img: murque12 },
  { img: murque13 },
  { img: Tursted2 },
  { img: Tursted3 },
  { img: Tursted6 },
  { img: Tursted7 },
  { img: Tursted8 },

];

const Happyclint = () => {
  
  return (
    <>
    <div className="mainmuque mt-5 mb-5">

      <div className="happyclint">
        Happy<span className="clientBlue">Client</span> & Trusted<span className="clientBlue">Partners</span>
      </div>    
  
      <Marquee speed={200} pauseOnHover>
        {happyHome.map((imgd, index) => (
          <div className="imgwith" key={index}>
            <img src={imgd.img} />
          </div>
        ))}
      </Marquee>
        </div>
    </>
  );
};

export default Happyclint;
