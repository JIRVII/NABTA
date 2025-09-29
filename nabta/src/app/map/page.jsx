"use client";
import { useEffect } from "react";

function Map() {
  useEffect(() => {
    // هنا المفروض تضيف كود Google Maps API
    console.log("تحميل الخريطة...");
  }, []);

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
        📍 خريطة المشاتل
      </h1>
      <p style={{ color: "#4e342e", marginBottom: "15px" }}>
        استكشف المشاتل القريبة منك مع التقييمات والتعليقات 🌱
      </p>
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "400px",
          background: "#f5f0e6",
          margin: "0 auto",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
        }}
      >
        🚧 سيتم دمج الخريطة هنا باستخدام Google Maps API
      </div>
    </div>
  );
}

export default Map;
