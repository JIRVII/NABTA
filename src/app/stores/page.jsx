"use client";

function Stores() {
  const stores = [
    { name: "مشتل الرياض", plants: ["🌵 صبار", "🌸 ورود"], delivery: true },
    { name: "مشتل القصيم", plants: ["🌿 ريحان", "🌱 نعناع"], delivery: false }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9f7f3", // خلفية الصفحة
        padding: "30px"
      }}
    >
      <h1
        style={{
          color: "#2e7d32",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "28px",
          fontWeight: "bold"
        }}
      >
        🏬 المتاجر والمشاتل
      </h1>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "600px", margin: "0 auto" }}>
        {stores.map((store, index) => (
          <li
            key={index}
            style={{
              background: "#f5f0e6", // خلفية البطاقة
              margin: "15px 0",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ color: "#1b5e20", marginBottom: "10px" }}>{store.name}</h2>
            <p style={{ margin: "8px 0", color: "#4e342e" }}>
              🌱 <strong>النباتات المتوفرة:</strong> {store.plants.join("، ")}
            </p>
            <p
              style={{
                color: store.delivery ? "#2e7d32" : "#6d4c41",
                fontWeight: "bold",
                marginTop: "10px"
              }}
            >
              {store.delivery ? "🚚 خدمة التوصيل متاحة" : "✅ الاستلام من المشتل فقط"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stores;