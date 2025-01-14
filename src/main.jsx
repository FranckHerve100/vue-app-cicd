import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Avis from '../src/pages/Avis.jsx'
import Acceuil from './pages/Acceuil.jsx';
import AvisEdit from './pages/AvisEdit.jsx';

const routes = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Acceuil />
      },
      {
        path: 'deposer-un-avis',
        element: <AvisEdit/>
      },
      {
        path: 'avis',
        element: <Avis/>
      }
    ]
  },

  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes} />
  </React.StrictMode>,
  
)

