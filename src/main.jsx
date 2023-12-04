import ReactDOM from "react-dom/client";
import React from "react";
import { router } from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
