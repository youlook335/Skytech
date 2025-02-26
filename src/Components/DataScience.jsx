import React from "react";
import Hero from "./Hero";
import Servicesdata from "./pages/Services/servicescomponent/Servicesdata";
import SkytehName from "./pages/About/SkytehName";
import { TypeAnimation } from "react-type-animation";
import './DataScience.css'

const DataScience = () => {
  const services = [
    {
      title: "Data Strategy and Consulting",
      content: "Data Strategy: Aligning data initiatives with business goals. Data Governance: Ensuring data quality, security, and compliance."
    },
    {
      title: "Data Engineering",
      content: "Data Collection: Gathering data from various sources. Data Integration: Combining data into a unified dataset. Data Warehousing: Efficient storage and retrieval. ETL Processes: Moving and transforming data for analysis."
    },
    {
      title: "Data Analysis",
      content: "Descriptive Analytics: Summarizing past data. Diagnostic Analytics: Identifying causes of trends. Exploratory Data Analysis (EDA): Uncovering patterns in data."
    },
    {
      title: "Advanced Analytics",
      content: "Predictive Analytics: Forecasting future events. Prescriptive Analytics: Recommending actions for optimization. Text Analytics: Extracting insights from textual data."
    },
    {
      title: "Big Data Solutions",
      content: "Big Data Architecture: Handling large-scale data. Real-Time Analytics: Immediate data processing and insights."
    },
    {
      title: "Data Visualization",
      content: "Dashboard Development: Interactive visualizations. Custom Reports: Tailored data reports. Data Storytelling: Presenting insights in a narrative format."
    },
    {
      title: "Business Intelligence (BI)",
      content: "BI Tools: Implementing tools like Tableau and Power BI. Ad-hoc Analysis: Enabling on-the-fly data exploration. Performance Metrics: Tracking key indicators."
    },
    {
      title: "Data Management",
      content: "Data Cleaning: Ensuring data quality. Data Transformation: Preparing data for analysis. Metadata Management: Managing data information."
    }
  ];
  
  
  return (
    <>
      <Hero
        img="/assets/datascience/data.jpg"
        heading="DATA SCIENCE SERVICES"
      />
    <h1>
            <SkytehName />
            <TypeAnimation
              sequence={["DATA SCIENCE SERVICES", 1000, "", 500]}
              wrapper="span"
              speed={50}
              style={{ color: "#007bff", fontWeight: "bold" }}
              repeat={Infinity}
            />{" "}
          </h1>
        <Servicesdata
         description=  <> <div className="sevicesText">    Leverage the power of data with our Data Science Services. We
         provide data analysis, predictive modeling, machine learning, and AI
         solutions to help you make informed decisions, optimize operations,
         and uncover new business opportunities. Our data-driven insights are
         designed to give you a competitive edge Included Services:
     </div></>/>

      <div className="container py-5">
        <div className="heads text-center mt-5 mb-5">
      
        </div>
        <div className="row mt-5">
        {services.map((service, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-12 mb-4 mt-5">
            <div className="ile-container">
              <div className="ile-timeline-vertical"></div>
              <div className="ile-content-box">
                <h2 className="ile-title">{service.title}</h2>
                <p className="ile-content">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>      </div>

    </>
  );
};

export default DataScience;
