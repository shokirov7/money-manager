import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import { getItem } from './helpers/persistence-log'
import Archive from './pages/archive/Archive'
import Filial from './pages/filial/Filial'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import Stats from './pages/stats/Stats'
import Workers from './pages/workers/Workers'

function App() {
	const role = getItem('role') ? getItem('role') : 'user'
	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
				<div className='app_right'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products role={role} />} />
						<Route path='/workers' element={<Workers role={role} />} />
						<Route path='/filials' element={<Filial role={role} />} />
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

export default App
