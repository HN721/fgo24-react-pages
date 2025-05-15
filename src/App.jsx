import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import AboutPage from "./Pages/AboutPage";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/About", element: <AboutPage /> },
    { path: "/Contact", element: <ContactUs /> },
  ]);
  return <RouterProvider router={router} />;
}
