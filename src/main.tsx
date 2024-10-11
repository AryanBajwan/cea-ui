import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx';
import Home from './pages/Home.tsx';
import Team from './pages/Team.tsx';
import Post from './pages/Post.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
        errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
