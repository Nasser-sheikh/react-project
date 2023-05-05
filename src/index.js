import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascrpt";
import { HelmetProvider } from "react-helmet-async";

//routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <h2 style={{ color: "black", textAlign: "center", marginTop: "100px" }}>
        Sorry...................
      </h2>
    ),
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
