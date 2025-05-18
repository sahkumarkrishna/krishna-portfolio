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
    element: <Hero />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Project /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // This is now outside of <Hero />
  {
    path: "*",
    element: <NotFound />,
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
