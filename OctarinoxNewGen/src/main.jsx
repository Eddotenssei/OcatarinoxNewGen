import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";

import Layout from "./layouts/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import AboutUS from "./pages/aboutUs";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import WhyOpenSource from "./pages/WhyOpenSource";
import Test from "./pages/test";

import { generatedRoutes } from "./pages/generated/generatedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/aboutUs",
        element: <AboutUS />,
      },
      {
        path: "/why-open-source",
        element: <WhyOpenSource />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      ...generatedRoutes,
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
