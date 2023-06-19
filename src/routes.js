import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Task from "./pages/Task";
import Order from "./pages/Order";
import Main from "./pages/Main";
import Emp from "./pages/Emp";
import Report from "./pages/Report";
import {
    ADMIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE,
    EMP_ROUTE, ORDER_ROUTE
} from "./utils/consts";

export const authRoutes = [
    {
        path: "ADMIN_ROUTE",
        Element: Admin
    },
    {
        path: "/main",
        Element: Main
    }
]

export const publicRoutes = [
    {
        path: "/login",
        Element: Auth
    },
    {
        path: "/report",
        Element: Report
    },
    {
        path: "/",
        Element: Main
    },
    {
        path: "/main",
        Element: Main
    },
    {
        path: "/order",
        Element: Order
    },
    {
        path: "/emp",
        Element: Emp
    },
    {
        path: "/task",
        Element: Task
    },
    {
        path: "/registration",
        Element: Auth
    }

]