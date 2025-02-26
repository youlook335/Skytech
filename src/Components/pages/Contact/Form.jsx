import React from "react";
import "./form.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitFn = (data) => {
    emailjs
      .send("service_qi2f8pj", "template_z2q0vxa", data, "YIyH9o0wDxWaM66e_")
      .then(
        () => {
          alert("Message Sent");
          reset();
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <div className="form-grid">
      <div className="info">
        <h1 className="formTitle">We're Eager To Hear From You</h1>
        <p className="info-p">
          Thank you for considering Skytech as your solution provider. Our team
          is dedicated to providing you with the best services in business
          communication, profile development, and marketing.
        </p>
      <div className="main-address">

        <div className="address-container">
          <i className="fa-solid fa-location-dot"></i>
          <div className="address-text">
            <p className="address">Gulshan e Iqbal, Karachi</p>
            <p className="address">City, Sindh, Pakistan.</p>
          </div>
        </div>

        <div className="address-container">
          <i className="fa-solid fa-phone"></i>
          <div className="address-text">
            <p className="address">+92 3341117978</p>
            <p className="address">+968 7104 3669 </p>
          </div>
        </div>

        <div className="address-container">
          <i className="fa-solid fa-envelope"></i>
          <div className="address-text">
            <p className="address">info@skytech.com.pk</p>
          </div>
        </div>
      </div>

        <div className="social-media">
          <a
            href="https://www.facebook.com/people/Skytech/61551669712091/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="facebook-icon fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="instagram-icon fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/sky-tech-dot/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="facebook-icon fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC6B3bIIbojskLZCEaLCgqlg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="instagram-icon fab fa-youtube"></i>
          </a>
          <a
            href="https://www.pinterest.com/skytechdot/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E60023" }}
          >
            <i class="fa-brands fa-pinterest"></i>
          </a>

          <a
            href="https://www.threads.net/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-square-threads"></i>
          </a>
          <a
            href="mailto:info@skytech.com.pk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#149af3", fontSize: "24px" }}
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="form">
        <h1 className="formTitle1">Contact Us</h1>
        <form onSubmit={handleSubmit(submitFn)}>
          <div className="label-flex">
            <label htmlFor="first_name">First Name & Last Name</label>
          </div>

          <div className="input-flex">
            <input
              name="first_name"
              className="ps-3"
              type="text"
              {...register("first_name")}
            />
            <input
              name="last_name"
              className="ps-3"
              type="text"
              {...register("last_name")}
            />
          </div>

          <label htmlFor="company">Company</label>
          <input
            name="company"
            className="ps-3"
            type="text"
            {...register("company")}
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            className="ps-3"
            type="email"
            {...register("email")}
          />

          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            className="ps-3"
            type="text"
            {...register("phone")}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className="message ps-3"
            {...register("message")}
          ></textarea>

          <div className="btn-cont">
            <button type="submit" className="send">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
