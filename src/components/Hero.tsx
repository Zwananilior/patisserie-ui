import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate =  useNavigate();

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        color: "#4a4a4a",
        padding: "2rem",
        backgroundColor: "#f8e6e6",
      }}
    >
      <img
        src="/IMG-20250811-WA0033.jpg"
        alt="Delicious cakes"
        style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          color: "#311b28",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "600" , fontFamily: "Brush Script MT , cursive"}}>
          Delight in
        </h1>
        <p style={{ fontSize: "1rem", letterSpacing: "0.1em", marginTop: "0.3rem" }}>
          PATIENCE IN EVERY BITE!
        </p>
        <button className="styles"onClick={() => navigate("/menu")}
          style={{
            marginTop: "1rem",
            backgroundColor: "#be3898ff",
            color: "#311b28",
            border: "none",
            padding: "0.7rem 2rem",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
