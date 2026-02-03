import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./layout/Hero";
import ThreeBackground from "./components/ThreeBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThreeBackground isHomePage={true} />
        <Hero />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { 
        path: "about", 
        element: (
          <>
            <ThreeBackground isHomePage={false} />
            <About />
          </>
        )
      },
      { 
        path: "projects", 
        element: (
          <>
            <ThreeBackground isHomePage={false} />
            <Project />
          </>
        )
      },
      { 
        path: "services", 
        element: (
          <>
            <ThreeBackground isHomePage={false} />
            <Services />
          </>
        )
      },
      { 
        path: "contact", 
        element: (
          <>
            <ThreeBackground isHomePage={false} />
            <Contact />
          </>
        )
      },
    ],
  },
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
