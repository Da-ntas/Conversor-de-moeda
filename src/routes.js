import React from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
]);

export default router;