import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import CardLayout from "../Layouts/CardLayout";
import Home from "../Pages/Home/Home/Home";
import Cards from "../Pages/Cards/Cards";
import Recipes from "../Pages/Recipes/Recipes";

const router = createBrowserRouter([
 {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path : '/', 
            element : <Home></Home>
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
  
  
]);

export default router; 
