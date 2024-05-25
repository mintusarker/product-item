import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../componant/Login";
import Sign from "../componant/Sign";
import Home from "../componant/Home/Home";

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
]);

export default router;
