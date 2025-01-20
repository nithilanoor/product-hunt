import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../pages/AllProducts";
import Details from "../pages/Details";
import MyProfile from "../pages/Dashboard/MyProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allProducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: "myProfile",
                element: <MyProfile></MyProfile>
            },

            // admin only routes
            // {
            //     path: 'adminHome',
            //     element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            // },
            // {
            //     path: 'addItems',
            //     element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            // },
            // {
            //     path: 'users',
            //     element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            // },
            // {
            //     path: "manageItems",
            //     element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            // },
            // {
            //     path: 'updateItem/:id',
            //     element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
            //     loader: ({ params }) => fetch(`https://bistro-boss-server-zeta-tawny.vercel.app/menu/${params.id}`)
            // }

        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default router;