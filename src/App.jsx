import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import authService from './api/axios'
import Sidebar from './components/sidebar/Sidebar'
import { getItem } from './helpers/persistence-log'
import Archive from './pages/archive/Archive'
import Filial from './pages/filial/Filial'
import FilialId from './pages/filialid/FilialId'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Products from './pages/products/Products'
import ProductId from './pages/productsid/ProductId'
import SotuvId from './pages/sotuvid/SotuvId'
import Stats from './pages/stats/Stats'
import UserProducts from './pages/user/Products/UserProducts'
import Tarqatma from './pages/user/Tarqatma/Tarqatma'
import XodimHome from './pages/user/home/XodimHome'
import Profile from './pages/user/profile/Profile'
import Workers from './pages/workers/Workers'
import XodimId from './pages/xodimid/XodimId'
import { getUserDetails, signUserFailure, signUserStart } from './reducers/auth'

function App() {
	const dispatch = useDispatch()
	const role = getItem('role') ? getItem('role') : 'user'
	const token = getItem('token') ? getItem('token') : ''
	const { loggedIn } = useSelector(state => state.reducer)

	const getUser = async () => {
		dispatch(signUserStart())
		try {
			const { data } = await authService.getUser()
			dispatch(getUserDetails(data))
		} catch (error) {
			dispatch(signUserFailure(error))
		}
	}
	useEffect(() => {
		if (token) {
			getUser()
		}
	}, [])
	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar role={role} />
				<div className='app_right'>
					{role === 'admin' ? (
						<Routes>
							{(loggedIn && <Route path='/' element={<Home />} />) || (
								<Route path='/' element={<Login />} />
							)}
							{(loggedIn && (
								<Route path='/products' element={<Products />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && (
								<Route path='/workers' element={<Workers />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && <Route path='/filials' element={<Filial />} />) || (
								<Route path='/' element={<Login />} />
							)}
							{(loggedIn && (
								<Route path='/statistic' element={<Stats />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && (
								<Route path='/archive' element={<Archive />} />
							)) || <Route path='/' element={<Login />} />}
							<Route path='/login' element={<Login />} />
							{(loggedIn && (
								<Route path='/products/:id' element={<ProductId />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && (
								<Route path='/sales/:id' element={<SotuvId />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && (
								<Route path='/workers/:id' element={<XodimId />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && (
								<Route path='/filials/:id' element={<FilialId />} />
							)) || <Route path='/' element={<Login />} />}
						</Routes>
					) : (
						<Routes>
							{(loggedIn && <Route path='/' element={<XodimHome />} />) || (
								<Route path='/' element={<Login />} />
							)}
							{(loggedIn && (
								<Route path='/products' element={<UserProducts />} />
							)) || <Route path='/' element={<Login />} />}
							<Route path='/login' element={<Login />} />
							{(loggedIn && (
								<Route path='/tarqatmalar' element={<Tarqatma />} />
							)) || <Route path='/' element={<Login />} />}
							{(loggedIn && (
								<Route path='/profile' element={<Profile />} />
							)) || <Route path='/' element={<Login />} />}
						</Routes>
					)}
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
