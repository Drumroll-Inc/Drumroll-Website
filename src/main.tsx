import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/LandingPasges/LandingPasges";
import Work from "./Components/WorkComponets/WorkComponet/WorkComponet";
import Service from "./Components/ServiceComponets/ServiceComponet/ServiceComponet";
import App from "./App.tsx";
import "./index.css";


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
  } else {
    console.error('Root element not found');
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals