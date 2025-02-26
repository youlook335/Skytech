import { useEffect } from "react";
import Aos from "aos";

const ContentWritingProcess = ({ content }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          data-aos="fade-down"
          style={{
            color: "#1a73e8",
            fontSize: "38px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          {content.title}
        </h2>
        <p
          data-aos="fade-up"
          style={{
            color: "#6c757d",
            fontSize: "18px",
            maxWidth: "700px",
            backgroundColor: "blue",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          {content.description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {content.items.map((item, index) => (
          <div
            key={index}
            data-aos={item.animation}
            style={{
              backgroundColor: "#ffffff",
              color: "#333",
              borderRadius: "10px",
              padding: "40px",
              width: "280px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <h3
              style={{
                // backgroundColor: "#1a73e8",
                height : "50px ",
                fontSize: "25px",
                fontWeight: "500",
                marginBottom: "15px",
                color: "#1a73e8",
              }}
            >
              {item.heading}
            </h3>
            <hr style={{ width: "50px", margin: "0 auto 20px auto", borderColor: "#1a73e8" }} />
            <p
              style={{
                fontSize: "20px",
                color: "#6c757d",
                lineHeight: "1.5",
                marginBottom: "0",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentWritingProcess;
