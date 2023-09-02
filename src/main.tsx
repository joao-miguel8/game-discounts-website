import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider
} from "react-router-dom";
import App from './App.tsx'
import Home from '@/routes/Home.tsx'
import Favorites from '@/routes/Favorites.tsx';
import ErrorPage from '@/routes/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: "/notfound",
    element: <ErrorPage />
  },
  {
    path: "*",
    element: <Navigate to="/notfound" />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
)
