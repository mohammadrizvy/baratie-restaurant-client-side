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

const router = createBrowserRouter([
 {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path : '/', 
            element : <Home></Home>
         },
        {
            path : '/blogs', 
            element : <Blogs></Blogs>
         },
        {
            path : '/orderonline', 
            element : <OrderOnline></OrderOnline>
         },
    ]
  },
 {
    path: '/',
    element: <CardLayout />,
    children: [
      {
        path: '/recipes/:id',
        element: <Recipes></Recipes>
      }
    ]
  },
 {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
        {
            path : 'login', 
            element : <Login></Login>
         },
        {
            path : 'register', 
            element : <Register></Register>
         },
    ]
  },
  
  
]);

export default router; 
