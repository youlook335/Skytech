import React from 'react';
// import { ShopifypricePlans } from "../../index.js";
// import { WebpricePlans } from "../../index.js";
import { graphirPricePlans } from "../../index.js";
import "./packages.css";
import { FaLocationArrow } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// Combine all plans into a single array
const Packages = () => {
  return (
    <>
      <div className="mainContainer">
        {graphirPricePlans.map((categoryData) => (
          <div key={categoryData.category} className="containermb-8">
            <h2 className="PlanTitle text-2xl font-bold mb-4 capitalize">
             <div className="blue"> {categoryData.category}</div>
            </h2>
            <div className="cardMain">
              {categoryData.plans.map((plan, index) => (
                <div
                  key={index}
                  className="cardContainer border p-1 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="cardStyle">
                    <h3 className="cardTitle text-xl font-semibold mb-2">{plan.title}</h3>
                    <p className="cardPlan text-lg font-bold text-orange-600">
                      {plan.price}
                      <span className="textPeriod">{plan.period}</span>
                    </p>
                    <ul className="boxes">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="featureBox text-sm">
                          <FaLocationArrow className='featureIcons' /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
            </div>
          
            <div className="button">
                      <Link to={"/Contact"}>
                        <button>Contact Now</button>
                      </Link>
                    </div>
          </div>
          
        ))}
      </div>
    </>
  );
};

export default Packages;