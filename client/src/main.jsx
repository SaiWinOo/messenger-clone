import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import routes from "./routes/index.jsx";
import {RouterProvider} from "react-router-dom";
import socket from "./Socket.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes} >
          <App />
      </RouterProvider>
  </React.StrictMode>,
)
