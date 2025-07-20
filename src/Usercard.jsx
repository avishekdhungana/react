import React from "react";

export default function UserCard({ name, age, photo, buttonLabel }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "200px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={photo} 
        alt={name} 
        style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} 
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <button style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
        {buttonLabel}
      </button>
    </div>
  );
}
