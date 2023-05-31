import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import BlogSection from "../../Pages/Home/BlogSection/BlogSection";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ForgetPassword from "../../Pages/Login/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EmailVerificationSuccess from "../../Pages/Signup/EmailVerificationSuccess";

const router = createBrowserRouter([
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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/forget-password',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/blogSection',
                element: <BlogSection></BlogSection>
            },
            {
                path: "/verification",
                element: <PrivateRoute><EmailVerificationSuccess></EmailVerificationSuccess></PrivateRoute>,
              },
        ]
    }
])

export default router;