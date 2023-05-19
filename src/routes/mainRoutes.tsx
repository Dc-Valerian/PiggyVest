import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/Block/admin/AdminLayout";
import Header from "../components/Block/admin/Header";


export const mainRoutes =  createBrowserRouter([{
    path: "/",
    element:<Header/> ,
    children: [{
        index: true,
        element: < AdminLayout/>
}]
}])

