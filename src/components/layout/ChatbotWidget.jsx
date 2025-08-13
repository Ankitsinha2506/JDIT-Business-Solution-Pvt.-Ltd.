import React, { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    const tidioScript = document.createElement("script");
    tidioScript.src = "//code.tidio.co/zl2mh0b1mk0e2fets3ji8mbq1xa5izuu.js"; // your correct script URL
    tidioScript.async = true;
    document.body.appendChild(tidioScript);
  }, []);

  return null;
}
