import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppStickyIcon() {
  const whatsappNumber = "9112108484"; // Replace with your WhatsApp number (country code + number, no symbols)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "120px",
        right: "25px", // ✅ always on right
        zIndex: 9999,  // stay on top of everything
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
