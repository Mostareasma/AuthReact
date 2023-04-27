import {lazy} from "react";
import Dashboard from "../pages/Dashboard";
const Login  = lazy(() =>import ("../pages/Login"));
const Register  = lazy(() =>import ("../pages/Register"));
const Welcome  = lazy(() =>import  ("../pages/Welcome"));




export const APP_ROUTES = [
    {
        path:'/signup' ,
        element:Register
    },
    {
        path:'/login' ,
        element:Login
    },
    {
        path:'/' ,
        element:Welcome
    },
    {
        path:'/dashboard' ,
        element:Dashboard
    }
]