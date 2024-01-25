import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppComercio } from "./AppComercio.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppComercio />
    </React.StrictMode>
  </BrowserRouter>
);
