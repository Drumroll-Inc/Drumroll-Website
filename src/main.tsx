import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ByZaraIWorks from "./Components/WorkComponets/WorkLayouts/ByZaraIWorks/ByZaraIWorks";
import WorkComponet from "./Components/WorkComponets/WorkComponet/WorkComponet";
import IndetifyDesign from "./Components/ServiceComponets/ServiceLayouts/IndetifyDesign/IndetifyDesign";
import WebDevelopements from "./Components/ServiceComponets/ServiceLayouts/WebDevelopements/WebDevelopements";
import ContentDevelopemts from "./Components/ServiceComponets/ServiceLayouts/ContentDevelopemts/ContentDevelopemts";
import App from "./App";
import "./index.css";


document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/WorkComponet" element={<WorkComponet />} />
            <Route path="/ByZaraIWorks" element={<ByZaraIWorks />} />
            <Route path="/IndetifyDesign" element={<IndetifyDesign />} />
            <Route path="/WebDevelopements" element={<WebDevelopements />} />
            <Route path="/ContentDevelopemts" element={<ContentDevelopemts />} />
          </Routes>
        </Router>
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals