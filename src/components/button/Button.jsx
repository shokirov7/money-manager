import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'

function Button({text, go}) {
	const navigate = useNavigate()

	const handleCLick = ()=>{
		navigate(`${go}`)
	}

	return (
		<button onClick={handleCLick}>{text}</button>
	)
}

export default Button