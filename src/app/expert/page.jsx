// src/app/expert/page.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function Expert() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 أهلاً! أنا خبير نبتة. اكتب مشكلتك أو استفسارك." }
  ]);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef();

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { from: "bot", text: data.reply }]);
      } else if (data.error) {
        setMessages(prev => [...prev, { from: "bot", text: "حدث خطأ: " + (data.error || "غير معروف") }]);
      } else {
        setMessages(prev => [...prev, { from: "bot", text: "تعذر الحصول على رد." }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { from: "bot", text: "خطأ في الاتصال بالخدمة." }]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f9f7f3", padding: 24 }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>🤖 خبير نبتة — دردشة</h1>

      <div
        ref={boxRef}
        style={{
          background: "#fff",
          maxWidth: 820,
          margin: "18px auto",
          padding: 18,
          borderRadius: 12,
          height: 420,
          overflowY: "auto",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)"
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: m.from === "user" ? "flex-end" : "flex-start",
              marginBottom: 12
            }}
          >
            <div
              style={{
                maxWidth: "78%",
                padding: 12,
                borderRadius: 10,
                background: m.from === "user" ? "#e8f5e9" : "#f1f1f1",
                color: "#222",
                lineHeight: 1.5
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && <p style={{ textAlign: "center", color: "#666" }}>جاري الحصول على إجابة...</p>}
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: 8 }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="ما مشكلتك؟ اكتب هنا ثم اضغط Enter"
          style={{ flex: 1, padding: 12, borderRadius: 10, border: "1px solid #ddd", minHeight: 60 }}
        />
        <button
          onClick={send}
          disabled={loading}
          style={{
            padding: "12px 18px",
            borderRadius: 10,
            background: "linear-gradient(90deg,#81c784,#388e3c)",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          إرسال
        </button>
      </div>
    </div>
  );
}