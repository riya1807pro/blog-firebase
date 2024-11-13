import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements,
			 BrowserRouter,
			 Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Blog from "./Pages/Blog"
import Navbar from "./Pages/Navbar"


import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<App/>
	</React.StrictMode>

										)