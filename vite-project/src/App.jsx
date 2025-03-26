import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider"
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Hero from "./layout/Hero";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />, // Acts as a layout component with Navbar
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Project /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
