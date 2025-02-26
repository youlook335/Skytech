import { useEffect } from "react";
import Aos from "aos";

const WhyChooseSection = ({ content }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2
          data-aos="fade-down"
          style={{
            color: "",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          {content.title}
        </h2>
        <p
          data-aos="fade-up"
          style={{
            color: "#333",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          {content.description}
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {content.items.map((item, index) => (
          <div
            key={index}
            data-aos={item.animation}
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
            <h3  style={{
                // backgroundColor: "#1a73e8",
                height : "90px ",
                fontSize: "25px",
                fontWeight: "500",
                marginBottom: "15px",
                // color: "#1a73e8",
              }}>{item.heading}</h3>
            <hr />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
