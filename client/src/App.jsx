import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./layout/Hero";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />, // Acts as a layout component with Navbar
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Project /> },

      { path: "contact", element: <Contact /> },
      { path: "Services", element: <Services /> },
      // Catch-all route (404 page)
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
