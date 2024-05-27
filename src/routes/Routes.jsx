import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../componant/Login";
import Sign from "../componant/Sign";
import Home from "../componant/Home/Home";
import AddProduct from "../componant/Dashboard/AddProduct";
import AllProducts from "../componant/Dashboard/AllProducts";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../componant/Dashboard/UpdateProduct";
import Details from "../componant/Dashboard/Details";
import DashboardHome from "../componant/Dashboard/DashboardHome";

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
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/add_product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/All_products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/dashboard/detail/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
    ],
  },
]);

export default router;
