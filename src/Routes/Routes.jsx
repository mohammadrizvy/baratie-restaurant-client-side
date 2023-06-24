import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import CardLayout from "../Layouts/CardLayout";
import Home from "../Pages/Home/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Blogs from "../Blogs/Blogs";

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
    ]
  },
 {
    path: 'recipes',
    element: <CardLayout></CardLayout>,
    children: [
        {
            path : ':id', 
            element : <Recipes></Recipes>
         },
    ]
  },
 {
    path: '/',
    element: <CardLayout></CardLayout>,
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
