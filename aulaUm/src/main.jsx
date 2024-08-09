import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Login/components/login';
import { RouterExercise } from './exercise-router/RouterExercise';
import './index.css';
import { ToastContainer } from "react-toastify"; 
import { ExerciseTwoRoutes } from "./exercise-router-two/ExerciseTwoRoutes";
import { Contact } from "./exercise-router-two/components/Contact";
import { Products } from "./exercise-router-two/components/Products";
import { ProductDetail } from "./exercise-router-two/components/ProductDetail";
import { About } from "./exercise-router-two/components/About";
import { Home } from "./exercise-router-two/components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExerciseTwoRoutes />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/list",
    element: <RouterExercise />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
