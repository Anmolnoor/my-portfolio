import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const portal = document.getElementById("root");

if (portal === null) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(portal).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
