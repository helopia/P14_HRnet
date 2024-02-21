import ErrorPage from "../pages/404";
import Layout from "../components/layout/Layout";
import CreateEmployeePage from "../pages/CreateEmployeePage";
import {createBrowserRouter} from "react-router-dom";
import CurrentEmployeePage from "../pages/CurrentEmployeePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <CreateEmployeePage/>,
            },
            {
                path: "/currentEmployee",
                element: <CurrentEmployeePage/>,
            },
        ],
    },
]);
