import { createRoot } from "react-dom/client";
import Provider from "./context/Provider.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </Provider>
);
