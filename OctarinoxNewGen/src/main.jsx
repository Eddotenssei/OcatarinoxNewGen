import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './App.css'



import Layout from './layouts/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import AboutUS from './pages/aboutUs';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/aboutUs",
        element: <AboutUS />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
