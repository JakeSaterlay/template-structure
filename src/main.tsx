import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <RootLayout>
        <App />
      </RootLayout>
    </React.StrictMode>
  </BrowserRouter>
);
