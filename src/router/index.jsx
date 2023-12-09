import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import LoggedLayout from "../Layout/LoggedLayout";
import FormBudget from "../pages/FormBudget";
import Historic from "../pages/Historic";
import Login from "../pages/Login";
import NotFound404 from "../pages/NotFound404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <FormBudget />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/historic",
        element: <LoggedLayout />,
        children: [
          {
            index: true,
            element: <Historic />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);
