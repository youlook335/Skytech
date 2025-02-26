import React from "react";
import { RxDotFilled } from "react-icons/rx";
import "./Graphic.css";
const SkytechUp = () => {
  return (
    <div>
      <div className="serviceLogo">
        <span className="sky">SKY</span> <span className="tech">tech</span>{" "}
        <span className="dot">
          <RxDotFilled />
        </span>
      </div>
    </div>
  );
};

export default SkytechUp;
