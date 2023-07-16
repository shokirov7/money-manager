import React, { useState } from "react";
import './Login.css'
import authService from '../../api/axios'
import { useDispatch } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../../reducers/auth'

function Login() {
	const [isAdmin, setAdmin] = useState(
		getItem('role') ? getItem('role') : 'user'
	)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = async e => {
			e.preventDefault()
			const user = {
				username: username,
				password: password,
			}
			dispatch(signUserStart)
			try {
				// if (isAdmin === 'admin') {
					// if (user.username === 'admin' && user.password === '123') {
            const {data} = await authService.userLogin(user)
						dispatch(signUserSuccess(data))
					// } else {
					// 	alert("Siz admin nomidan kira olishingiz uchun sizda ruxsat yo'q !")
					// }
				// } else if (isAdmin === 'user') {
					// if (user.username !== 'admin' && user.password !== '123') {
					// 	// const { data } = await authService.userLogin(user)
					// 	// dispatch(signUserSuccess(data))
					// 	console.log(data)
					// } else {
					// 	alert("Siz rolni noto'g'ri tanladingiz !")
					// }
					// dispatch(getUserDetails(data))
				// }
				// return
			} catch (error) {
        // dispatch(signUserFailure(error))
				console.log(error);
				// alert(error.request.response)
			}
		}

  return (
		<div className='login'>
			<form class='form' onSubmit={handleSubmit}>
				<p class='form-title'>Sign in</p>
				<select
					className='outline-none rounded-md bg-transparent w-full m-1 border border-[#334155]'
					onChange={e => {
						setAdmin(e.target.value)
						setItem('role', e.target.value)
					}}
					value={isAdmin}
				>
					<option value='admin'>Admin</option>
					<option value='user'>Xodim</option>
				</select>
				<div class='input-container'>
					<input
						type='text'
						placeholder='Username'
						required
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<span></span>
				</div>
				<div class='input-container'>
					<input
						type='password'
						placeholder='Password'
						required
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit' class='submit'>
					Sign in
				</button>
			</form>
		</div>
	)
}

export default Login;
