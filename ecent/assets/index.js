import React from 'react';
import {createRoot} from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Homepage from './homepage.js';
import System from './system.js';
import Primary from './primary.js';
import OneToOne from './onetoone.js';

const router = createBrowserRouter( 
[
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/methodology/",
        element:<System/>,
    },
    {
        path: "/primary/",
        element:<Primary/>,
    },
    {
        path: "/onetoone/",
        element:<OneToOne/>,
    },
])

const container = document.getElementById('root')
const root = createRoot(container)


root.render(
    <RouterProvider router={router}></RouterProvider>
);