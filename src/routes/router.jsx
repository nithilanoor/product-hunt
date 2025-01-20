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
import Payment from "../pages/Dashboard/Payment";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllUsers from "../pages/Dashboard/AllUsers";
import Statistics from "../pages/Dashboard/Statistics";


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
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },

            // admin only routes
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'stats',
                element: <Statistics></Statistics>
            }

        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default router;