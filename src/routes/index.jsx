import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import useAdminAuth from "../hooks/useAdminAuth";

const Error = lazy(() => import("../pages/Error"));
const Table = lazy(() => import("../pages/Table"));
const Modal = lazy(() => import("../pages/Modal"));
const Login = lazy(() => import("../pages/Login"));
const Layout = lazy(() => import("../layouts/Layout"));
const Register = lazy(() => import("../pages/Register"));
const Products = lazy(() => import("../pages/Products"));
const Category = lazy(() => import("../pages/Category"));
const Form = lazy(() => import("../components/lib/Form"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const CardCollection = lazy(() => import("../pages/CardCollection"));
const { isAuth } = useAdminAuth();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "/category",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
      },
      {
        path: "/table",
        element: (
          <PrivateRoute>
            <Table />
          </PrivateRoute>
        ),
      },
      {
        path: "/forms",
        element: (
          <PrivateRoute>
            <Form />
          </PrivateRoute>
        ),
      },
      {
        path: "/card",
        element: (
          <PrivateRoute>
            <CardCollection />
          </PrivateRoute>
        ),
      },
      {
        path: "/modal",
        element: (
          <PrivateRoute>
            <Modal />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: isAuth ? <Navigate to="/" /> : <Login />,
  },
  {
    path: "/register",
    element: isAuth ? <Navigate to="/" /> : <Register />,
  },
  {
    path: "/forgot-password",
    element: isAuth ? <Navigate to="/" /> : <ForgotPassword />,
  },
]);

export default router;
