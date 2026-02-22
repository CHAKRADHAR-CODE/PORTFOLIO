import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => {
        // Auto-update check every 60s
        setInterval(() => reg.update(), 60_000);
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "activated") {
                // New version available — reload
                window.location.reload();
              }
            });
          }
        });
      })
      .catch(() => {
        // SW registration failed silently
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
