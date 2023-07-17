import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import './AddWorkers.css'

function AddWorkers() {
	const navigate = useNavigate()
	const handelReturn = () => {
		navigate("/workers")
	}
	return (
		<div className='workers_add' onClick={() => handelReturn()}>
		<div className="workers_add_welcome" onClick={(e) => e.stopPropagation()}>
			<p>Xodim qo'shish</p>
			<Button go={"/workers"} text={"Qaytish"} />
		</div>
		<div className="workers_add_form">
		<div className="form-container" onClick={(e) => e.stopPropagation()}>
			<div className="logo-container">
			Xodim qo'shish
			</div>

			<form class="form">
				<div class="form-group">
					<label for="email">To'liq ism</label>
					<input type="text" id="email" name="email" placeholder="Ismini nomini qiriting" required="" />
					<label for="email">Familiya</label>
					<input type="text" id="email" name="email" placeholder="Familiyani qiriting" required="" />
					<label for="email">KPI</label>
					<input type="number" id="email" name="email" placeholder="KPI qiriting" required="" />
					<label for="select">Ombor</label>
					<select name="select" id="">
						<option value="">Namangan</option>
						<option value="">Namangan</option>
						<option value="">Namangan</option>
						<option value="">Namangan</option>
					</select>
					<label for="email">Password</label>
					<input type="number" id="email" name="email" placeholder="Passwordni qiriting" required="" />
					<label for="email">Telefon raqami</label>
					<input type="number" id="email" name="email" placeholder="Telefon raqamini qiriting" required="" />
					<label for="email">Username</label>
					<input type="text" id="email" name="email" placeholder="Usernameni qiriting" required="" />
				</div>

				<button class="form-submit-btn" type="submit">Qo'shish</button>
			</form>
		</div>
		</div>
	</div>
	)
}

export default AddWorkers