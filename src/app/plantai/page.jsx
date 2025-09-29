"use client";
import { useState } from "react";

export default function PlantAI() {
  const [userMsg, setUserMsg] = useState(""); // تعريف المتغير
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // إرسال الرسالة للـ API
  const sendMessage = async () => {
    if (!userMsg.trim()) return;
    setLoading(true);

    // إضافة رسالة المستخدم للشات
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);

    try {
  const res = await fetch("/api/plantai", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMsg }),
});

      const data = await res.json();

      // إضافة رد الذكاء
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: data.reply || "ما قدرت أفهم سؤالك 🌱" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "صار خطأ، جرّب مره ثانية 🚨" },
      ]);
    }

    setUserMsg(""); // مسح النص
    setLoading(false);
  };

  // زر الكاميرا (يخلي المستخدم يختار صورة)
  const openCamera = () => {
    alert("📷 ميزة الكاميرا لسه تحتاج ربط بخاصية تحليل الصور.");
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f6f1", // بيج فاتح
        color: "#2f4f2f", // أخضر غامق
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        🌱 خبير النبات الذكي
      </h1>

      <div
        style={{
          backgroundColor: "#ffffff",
          border: "2px solid #c5e1a5",
          borderRadius: "10px",
          padding: "15px",
          maxWidth: "600px",
          margin: "20px auto",
          height: "400px",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, i) => (
          <p
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              color: msg.sender === "user" ? "#1b5e20" : "#33691e",
              backgroundColor:
                msg.sender === "user" ? "#e6ee9c" : "#c5e1a5",
              padding: "10px",
              borderRadius: "8px",
              margin: "8px 0",
              maxWidth: "80%",
            }}
          >
            {msg.text}
          </p>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <input
          type="text"
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          placeholder="اكتب مشكلتك مع النبتة..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #c5e1a5",
            fontSize: "16px",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            backgroundColor: "#2e7d32",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          {loading ? "..." : "إرسال"}
        </button>
        <button
          onClick={openCamera}
          style={{
            backgroundColor: "#81c784",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          📷
        </button>
      </div>
    </div>
  );
}