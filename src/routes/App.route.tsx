import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from '@/pages/Home'
import Favorites from '@/pages/Favorites';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import GiveawayDetails from '@/pages/GiveawayDetails';
import GiveawaySearchListing from '@/components/GiveawaySearchListing';



export const router = createBrowserRouter([{
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
  },
  {
    path: "/giveawayDetails/:id",
    element: <GiveawayDetails />
  },
  {
    path: "/searchGiveaway",
    element: <GiveawaySearchListing />
  } ]
)
