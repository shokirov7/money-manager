import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Workers from "./pages/workers/Workers";
import Filial from "./pages/filial/Filial";
import Stats from "./pages/stats/Stats";
import Archive from "./pages/archive/Archive";
import Sidebar from "./components/sidebar/Sidebar";
import Login from './pages/login/Login'
import { useSelector } from 'react-redux'

function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
				<div className='app_right'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/workers' element={<Workers />} />
						<Route path='/filials' element={<Filial />} />
						<Route path='/statistic' element={<Stats />} />
						<Route path='/archive' element={<Archive />} />
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App;
