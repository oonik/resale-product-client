import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CeilingFan from "../../Pages/TypeOfFan/CeilingFan/CeilingFan";
import Signup from "../../Pages/Signup/Signup";

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
                loader: ({params})=> fetch(`http://localhost:5000/ceiling/${params.id}`)
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])