import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CeilingFan from "../../Pages/TypeOfFan/CeilingFan/CeilingFan";
import Signup from "../../Pages/Signup/Signup";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import SellerRoute from "../SellerRoute/SellerRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import Blog from "../../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/ceiling/:id',
                element: <CeilingFan></CeilingFan>,
                loader: ({params})=> fetch(`https://old-fan-sell-server.vercel.app/ceiling/${params.id}`)
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])