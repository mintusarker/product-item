import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../componant/Login";
import Sign from "../componant/Sign";
import Home from "../componant/Home/Home";
import AddProduct from "../componant/Dashboard/AddProduct";
import AllProducts from "../componant/Dashboard/AllProducts";
import Dashboard from "../Layout/Dashboard";
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign_up",
        element: <Sign></Sign>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add_product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/All_products",
        element: <AllProducts></AllProducts>,
      },
    ],
  },
]);

export default router;
