import React from "react";

import Home from "./components/Home";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Signup from "./components/signup";
import Signin from "./components/signin";
import ToDo from "./components/ToDo";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
    {
      path: "/todo",
      element: <ToDo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
