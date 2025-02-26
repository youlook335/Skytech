import React, { useEffect, useState } from "react";
import "./Quote.css";
import SkytechName from '../About/SkytehName'
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Quote = () => {
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const submitFn = (dataForm) => {
    // Map the form data to match the template fields
    const templateParams = {
      to_name: "SkyTech", // You can change this to be dynamic if required
      from_name: dataForm.fullName || "No Name Provided", // Default if empty
      phone_number: dataForm.mobile || "No Phone Number",
      email: dataForm.email || "No Email",
      message: dataForm.projectName || "No Project Name",
      country: dataForm.country || "No Country",
      other_country: dataForm.otherCountry || "Not Provided",
      categories: dataForm.categories?.join(", ") || "No Categories Selected",
      timeline: dataForm.timeline || "No Timeline",
      budget: dataForm.budget || "No Budget",
    };

    // console.log("Data sent to emailjs:", templateParams); // Log to verify the data

    // Send email through EmailJS
    emailjs.send(
    "service_qi2f8pj", "template_zu6lgse", templateParams, "YIyH9o0wDxWaM66e_"// Your EmailJS User ID
    ).then(
      () => {
        alert("Email sent successfully");
        reset();
      },
      (error) => {
        console.log("Error sending email:", error);
      }
    );
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="request-quote-container">
      <div className="request-quote-card">
        <h1 className="headingQuote">Get a Quote</h1>
        <h2 className="heading2Quote">Project Details</h2>

        <form onSubmit={handleSubmit(submitFn)}>
          {/* Project Name */}
          <div className="form-group">
            <label>Project Name *</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter name of the Project"
              {...register("projectName", { required: true })}
            />
          </div>

          {/* Customer Type */}
          <div className="form-group">
            <label>Are you a new or existing customer?</label>
            <input
              type="text"
              className="input-field"
              placeholder="New or existing customer?"
              {...register("customerType")}
            />
          </div>

          <hr />

          {/* Project Category */}
          <div className="form-group">
            <label>Project Category</label>
            <div className="checkbox-grid">
              {[
                "Website Development",
                "Artificial Intelligence",
                "iOS App Development",
                "Android App Development",
                "Hybrid Mobile App",
                "Flutter App Development",
                "Website Design",
                "UI/UX Design",
                "Video Ad",
                "Digital Marketing",
                "Social Media Marketing",
                "Search Engine Optimization (SEO)",
                "POS System",
                "Software Development",
                "Ecommerce Website",
                "CRM Development",
                "Consultation",
              ].map((category) => (
                <label key={category}>
                  <input type="checkbox" value={category} {...register("categories")} /> {category}
                </label>
              ))}
            </div>
          </div>

          <hr />

          {/* Project Timeline */}
          <div className="form-group">
            <label>Project Timeline *</label>
            <select
              className="input-field"
              {...register("timeline", { required: true })}
            >
              <option>Select Timeline</option>
              <option>1-3 Months</option>
              <option>3-6 Months</option>
              <option>6+ Months</option>
            </select>
          </div>

          {/* Country */}
          <div className="form-group">
            <label>Country *</label>
            <select className="input-field" {...register("country", { required: true })}>
              {countries?.map((country, index) => (
                <option key={index}>{country.name.common}</option>
              ))}
            </select>
            <input
              type="text"
              className="input-field"
              placeholder="Other Country"
              {...register("otherCountry")}
            />
          </div>

          {/* Budget */}
          <div className="form-group">
            <label>Select your budget *</label>
            <select
              className="input-field"
              {...register("budget", { required: true })}
            >
              <option>Select budget in USD</option>
              <option>Less than $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>

          <div className="contact-info">
            <hr />
            <h2>Contact Information</h2>

            {/* Full Name */}
            <div className="input-group">
              <label>Full Name *</label>
              <input
                type="text"
                className="input-field"
                placeholder="Customer name"
                {...register("fullName", { required: true })}
              />
            </div>

            {/* Email Address */}
            <div className="input-group">
              <label>Email Address *</label>
              <input
                type="email"
                className="input-field"
                placeholder="abc@gmail.com"
                {...register("email", { required: true })}
              />
            </div>

            {/* Mobile Number */}
            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                className="input-field"
                placeholder="XXXXXXXXXXX"
                {...register("mobile")}
              />
            </div>
          </div>

          <hr />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="contact-box-Text">
        <h3>Get In Touch <SkytechName /></h3>
        <p>
          Renowned mobile app and web development company delivering user-engaging mobile applications
          and responsive websites for multiple industry verticals.
        </p>
        <hr />
        <strong>Email:</strong> info@skytech.com.pk
        <br />
        <strong>Phone:</strong> +923310007978
        <br />
        <strong>Mobile:</strong> +923335673810
        <br />
        <hr />
        <p>
          <strong>Working Hours:</strong>
          <br />
          Monday - Saturday: 09am to 06pm
          <br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
};

export default Quote;
