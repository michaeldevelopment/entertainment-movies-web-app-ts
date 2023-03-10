import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import Bookmark from './pages/Bookmark'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'

import "./styles//styles.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tvshows",
    element: <TvShows />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
