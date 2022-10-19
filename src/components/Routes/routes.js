import { createBrowserRouter } from "react-router-dom";
import Countries from "../Countries/Countries";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Login from '../Login/Login'
import Register from '../Register/Register'
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        // loader: () => fetch('https://restcountries.com/v3.1/all'),
        element: <Layout></Layout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: 'countries', element: <PrivateRoute><Countries></Countries></PrivateRoute> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> }
        ]
    }
]);

export default routes;