import React, { createContext } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Outlet, useLoaderData } from "react-router-dom";

export const CountriesContext = createContext();

const Layout = () => {
    const countries = useLoaderData();
    return (
        <div>
            <CountriesContext.Provider value={countries}>
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
            </CountriesContext.Provider>

        </div>
    );
};

export default Layout;