// import AOS from "aos";
import { useEffect } from "react";
import SkytehName from "../About/SkytehName";
import Aos from "aos";

const DigitalExtra = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2
          data-aos="fade-down"
          style={{
            color: "#149AF3",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          Why Choose <SkytehName /> for UI/UX Design?
        </h2>
         </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <div
          data-aos="fade-right"
          style={{
            backgroundColor: "#149AF3",
            color: "#fff",
            borderRadius: "8px",
            margin: "15px",
            padding: "30px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>Expert Team:</h3>
          <hr />
          <p>Experienced professionals in SEO, PPC, social media, and content marketing.     </p>
      
        </div>

        <div
          data-aos="fade-left"
          style={{
            backgroundColor: "#149AF3",
            color: "#fff",
            borderRadius: "8px",
            margin: "15px",
            padding: "30px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>Data-Driven Strategies:</h3>
          <hr />
          <p> Every campaign is backed by data and analytics for maximum ROI.</p>
        </div>

        <div
          data-aos="fade-up"
          style={{
            backgroundColor: "#149AF3",
            color: "#fff",
            borderRadius: "8px",
            margin: "15px",
            padding: "30px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>Customized Solutions:</h3>
          <hr />
          <p> Tailored marketing plans to fit your business goals.</p>
        </div>

        <div
          data-aos="fade-right"
          style={{
            backgroundColor: "#149AF3",
            color: "#fff",
            borderRadius: "8px",
            margin: "15px",
            padding: "30px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>Proven Results:</h3>
          <hr />
          <p> We focus on growth, engagement, and conversions.</p>
        </div>

        <div
          data-aos="fade-up"
          style={{
            backgroundColor: "#149AF3",
            color: "#fff",
            borderRadius: "8px",
            margin: "15px",
            padding: "30px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>Proven Results:</h3>
          <hr />
          <p>Flexible packages for startups, SMEs, and enterprises.</p>
        </div>
      </div>
    </section>
  );
};

export default DigitalExtra;
