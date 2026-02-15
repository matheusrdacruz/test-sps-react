import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./middleware/PrivateRoute";

import Home from "./pages/Home";
import Users from "./pages/Users";
import UserEdit from "./pages/UserEdit";
import NewUser from "./pages/NewUser";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute>
      <Navbar />
      <Home />
    </PrivateRoute>,
  },
  {
    path: "/users",
    element: <PrivateRoute>
      <Navbar />
      <Users />
    </PrivateRoute>,
  },
  {
    path: "/users/:userId",
    element: <PrivateRoute>
      <Navbar />
      <UserEdit />
    </PrivateRoute>,
  },
  {
    path: "/users/new",
    element: <PrivateRoute>
      <Navbar />
      <NewUser />
    </PrivateRoute>,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

export default router;
