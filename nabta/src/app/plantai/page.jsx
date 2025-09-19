"use client";
import { useState } from "react";

function PlantAI() {
  const [plant, setPlant] = useState(null);

  const handleDetect = () => {
    // مثال تجريبي
    setPlant({
      name: "🌿 ريحان",
      stores: ["مشتل الرياض", "مشتل القصيم"]
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9f7f3",
        padding: "30px",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "#2e7d32", marginBottom: "20px", fontSize: "26px" }}>
        🤖 خبير النبات
      </h1>
      <p style={{ color: "#4e342e", marginBottom: "20px" }}>
        وجه الكاميرا على أي نبتة للتعرف عليها 🌱
      </p>
      <button
        onClick={handleDetect}
        style={{
          padding: "12px 25px",
          background: "linear-gradient(to right, #81c784, #388e3c)",
          border: "none",
          color: "white",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        📷 فتح الكاميرا
      </button>

      {plant && (
        <div
          style={{
            marginTop: "25px",
            background: "#f5f0e6",
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "500px",
            marginInline: "auto",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ color: "#1b5e20" }}>{plant.name}</h2>
          <p style={{ color: "#4e342e" }}>
            🏬 متاجر توفر هذه النبتة: {plant.stores.join("، ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default PlantAI;