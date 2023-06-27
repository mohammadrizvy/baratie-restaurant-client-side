import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import CardLayout from "../Layouts/CardLayout";
import Home from "../Pages/Home/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Blogs from "../Blogs/Blogs";
import Cards from "../Pages/Cards/Cards";
import LoginLayout from "../Layouts/LoginLayout";
import OrderOnline from "../OrderOnline/OrderOnline";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/orderonline",
        element: <OrderOnline></OrderOnline>,
      },
    ],
  },
  {
    path: "recipes",
    element: <CardLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:600/chef/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router; 
