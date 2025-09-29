"use client";
import { useState } from "react";

function Support() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("✅ تم إرسال تذكرتك بنجاح!");
    setMessage("");
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
        💬 خدمة العملاء
      </h1>
      <p style={{ color: "#4e342e", marginBottom: "20px" }}>
        اكتب مشكلتك أو استفسارك للتواصل مع خبير النباتات 🌱
      </p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="✍️ اكتب رسالتك هنا..."
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "150px",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "15px",
          padding: "12px 25px",
          background: "linear-gradient(to right, #81c784, #388e3c)",
          border: "none",
          color: "white",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        📩 إرسال التذكرة
      </button>
    </div>
  );
}

export default Support;