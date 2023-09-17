import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { ToDoListDesign } from "./screens/ToDoListDesign";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/to-do-list-design",
    element: <ToDoListDesign />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
