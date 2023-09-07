import { FC } from 'react';
import { FC } from 'react';

import { createBrowserRouter, RouterProvider } from
'react-router-dom';
import { Login } from './account/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
 
  {
    path: '/login',
    element: <Login />,
  },
]);


export const App = () => {
  return <RouterProvider router={router} />;
};

