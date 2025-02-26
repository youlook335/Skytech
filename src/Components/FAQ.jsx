import React, { useState } from "react";
import "./Styles/Faq.css";

const Faq = () => {
  // Manage the active accordion item
  const [activeTab, setActiveTab] = useState([null]);

  // Toggle accordion item
  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <section className="faq-section ">
      <div className="containerr">
        <div className="faq-header">
          <h2>FAQ</h2>
          <h3>The Most Asked Questions From Our Users</h3>
        </div>

        <div className="faq-columns">
          {/* Left Column */}
          <div className="faq-column">
            <div className="faq-accordion">
              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 1 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(1)}
                >
                  <span className="accordion-icon">
                    {activeTab === 1 ? "-" : "+"}
                  </span>
                  What services does your tech company offer?
                </div>
                {activeTab === 1 && (
                  <div className="accordion-content">
                    <p>
                      We specialize in web development, digital marketing,
                      business communication, and technology tailored to your
                      needs.
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 2 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(2)}
                >
                  <span className="accordion-icon">
                    {activeTab === 2 ? "-" : "+"}
                  </span>
                  Do you work with specific industries?
                </div>
                {activeTab === 2 && (
                  <div className="accordion-content">
                    <p>
                      Our expertise spans across various industries, including
                      e-commerce, finance, and healthcare.
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 3 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(3)}
                >
                  <span className="accordion-icon">
                    {activeTab === 3 ? "-" : "+"}
                  </span>
                  About pricing plans
                </div>
                {activeTab === 3 && (
                  <div className="accordion-content">
                    <p>
                      At SKYTech, we provide tailored pricing for each project
                      based on its scope and complexity. Contact us for a
                      detailed quote.
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 4 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(4)}
                >
                  <span className="accordion-icon">
                    {activeTab === 4 ? "-" : "+"}
                  </span>
                  How does your web development process work?
                </div>
                {activeTab === 4 && (
                  <div className="accordion-content">
                    <p>
                      Our process involves understanding your goals, designing
                      interfaces, and implementing cutting-edge technologies to
                      create a seamless experience.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="faq-column">
            <div className="faq-accordion">
              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 5 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(5)}
                >
                  <span className="accordion-icon">
                    {activeTab === 5 ? "-" : "+"}
                  </span>
                  What digital marketing strategies do you employ?
                </div>
                {activeTab === 5 && (
                  <div className="accordion-content">
                    <p>
                      We focus on SEO, social media campaigns, PPC, and content
                      creation to boost your online presence.
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 6 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(6)}
                >
                  <span className="accordion-icon">
                    {activeTab === 6 ? "-" : "+"}
                  </span>
                  What sets your business communication services?
                </div>
                {activeTab === 6 && (
                  <div className="accordion-content">
                    <p>
                      We specialize in lead generation, cold calling, and
                      conversion techniques to drive tangible results.
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 7 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(7)}
                >
                  <span className="accordion-icon">
                    {activeTab === 7 ? "-" : "+"}
                  </span>
                  Do you provide technical support and maintenance?
                </div>
                {activeTab === 7 && (
                  <div className="accordion-content">
                    <p>
                      Yes, we provide ongoing technical support and maintenance
                      to ensure your platforms stay updated and running
                      smoothly.
                    </p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <div
                  className={`accordion-title ${
                    activeTab === 8 ? "active" : ""
                  }`}
                  onClick={() => toggleTab(8)}
                >
                  <span className="accordion-icon">
                    {activeTab === 8 ? "-" : "+"}
                  </span>
                  Can you integrate third-party into existing systems?
                </div>
                {activeTab === 8 && (
                  <div className="accordion-content">
                    <p>
                      Yes, we specialize in integrating third-party solutions
                      seamlessly into your existing systems to enhance
                      functionality.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
