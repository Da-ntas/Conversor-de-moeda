import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import LoadingPage from './components/LoadingPage';

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);