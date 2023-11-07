import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

// import './index.css

import Root from './routes/root.jsx';
import ErrorPage from './error_page.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
