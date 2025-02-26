import React, { useState } from "react";
import "./Policy.css";
import { TypeAnimation } from "react-type-animation";
import SkytehName from "./pages/About/SkytehName";

const Policy = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <h1>
        <TypeAnimation
          sequence={[
            "SkyTech Software House - Data Privacy Policy",
            1000,
            "",
            500,
          ]}
          wrapper="span"
          speed={50}
          style={{ color: "#007bff", fontWeight: "bold" }}
          repeat={Infinity}
        />{" "}
      </h1>

      <div className="policyContainer">
        <div className="sectionPolicy">
          <h2
            onClick={() => handleSectionClick("introduction")}
            className={selectedSection === "introduction" ? "selected" : ""}
          >
            Introduction
          </h2>
          <h2
            onClick={() => handleSectionClick("cookies")}
            className={selectedSection === "cookies" ? "selected" : ""}
          >
            We utilize technologies such as cookies
          </h2>
          <h2
            onClick={() => handleSectionClick("personalInfo")}
            className={selectedSection === "personalInfo" ? "selected" : ""}
          >
            Personal Information Collection
          </h2>
          <h2
            onClick={() => handleSectionClick("dataRetention")}
            className={selectedSection === "dataRetention" ? "selected" : ""}
          >
            Data Retention
          </h2>
          <h2
            onClick={() => handleSectionClick("thirdParty")}
            className={selectedSection === "thirdParty" ? "selected" : ""}
          >
            Third-Party Sharing
          </h2>
          <h2
            onClick={() => handleSectionClick("dataSecurity")}
            className={selectedSection === "dataSecurity" ? "selected" : ""}
          >
            Data Security
          </h2>
          <h2
            onClick={() => handleSectionClick("gdpr")}
            className={selectedSection === "gdpr" ? "selected" : ""}
          >
            GDPR Compliance
          </h2>
          <h2
            onClick={() => handleSectionClick("cookiesPolicy")}
            className={selectedSection === "cookiesPolicy" ? "selected" : ""}
          >
            Cookies Policy
          </h2>
        </div>

        <div className="showPolicy">
          {selectedSection === "introduction" && (
            <p>
              Thank you for visiting the <SkytehName /> Software House website.
              This policy describes how we handle the information we collect
              from you when you visit our site or use our applications and
              games.
            </p>
          )}
          {selectedSection === "cookies" && (
            <p>
              We utilize technologies such as cookies (small files stored by
              your browser), web beacons, or unique device identifiers to
              anonymously recognize your device, allowing us to provide a more
              tailored experience. Our systems may also log information like
              your browser, operating system, and IP address.
            </p>
          )}
          {selectedSection === "personalInfo" && (
            <p>
              We may collect personally identifiable information that you
              provide to us, such as your name, address, phone number, or email
              address. With your consent, we may also access additional personal
              information on your device, such as your contacts, calendar, or
              messages, to offer our services.
            </p>
          )}
          {selectedSection === "dataRetention" && (
            <p>
              We retain personal data only for as long as necessary. For our
              applications/games, we delete personally identifiable information
              (such as your name, address, email, or phone number) and other
              preferences linked to your account promptly once you delete your
              account.
            </p>
          )}
          {selectedSection === "thirdParty" && (
            <p>
              We do not share your personal data (such as your name, address,
              email, or phone) with third parties, nor do we allow advertising
              companies to collect data through our services.
            </p>
          )}
          {selectedSection === "dataSecurity" && (
            <p>
              We take reasonable measures to safeguard your personally
              identifiable information from unauthorized access or disclosure.
              For example, we encrypt payment data transmission in our
              applications/games.
            </p>
          )}
          {selectedSection === "gdpr" && (
            <p>
              We comply with the General Data Protection Regulation (GDPR) to
              ensure your data privacy rights. We will remove or delete client
              or individual data when there is no valid business reason to
              continue processing it, as outlined in Article 17 of the GDPR
              (Right to Erasure).
            </p>
          )}
          {selectedSection === "cookiesPolicy" && (
            <p>
              <SkytehName /> uses cookies to enhance your experience on our
              website. By continuing to use this site, you agree to our use of
              cookies. You can disable cookies by adjusting your browser
              settings. For more information, please refer to our cookie policy.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Policy;
