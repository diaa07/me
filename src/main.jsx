import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function setVh() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}
setVh();
let vhResizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(vhResizeTimeout);
  vhResizeTimeout = setTimeout(setVh, 150);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
