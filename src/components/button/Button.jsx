import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'

function Button({ text, go, click }) {
	const navigate = useNavigate()

	const handleCLick = () => {
		navigate(`${go}`)
	}

	return (
		<>
			{!click && <button onClick={handleCLick}>{text}</button>} ||{' '}
			<button onClick={click}>{text}</button>
		</>
	)
}

export default Button