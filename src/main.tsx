import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ScrollToHash from "./ScrollHash";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* ScrollToHash listens to route changes and scrolls to target */}
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </StrictMode>
);
