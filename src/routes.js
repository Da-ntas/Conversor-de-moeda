import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ConversorMedida = React.lazy(() => import("./pages/ConversorMedida"));
const ListaMedida = React.lazy(() => import("./pages/ListaMedida"));
const ListaMoeda = React.lazy(() => import("./pages/ListaMoeda"));

const router = createBrowserRouter([
    {
      path: "/moeda",
      element: <HomePage />,
    },
    {
      path: "/medida",
      element: <ConversorMedida />
    },
    {
      path: "/lista-medida",
      element: <ListaMedida />
    },
    {
      path: "/lista-moeda",
      element: <ListaMoeda />
    },
    {
      path: '*',
      element: <Navigate to='/moeda' />,
    }
]);

export default router;