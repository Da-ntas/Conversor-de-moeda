import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ConversorMedida from "./pages/ConversorMedida";

const HomePage = React.lazy(() => import("./pages/HomePage"));

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
      path: '*',
      element: <Navigate to='/moeda' />,
    }
]);

export default router;