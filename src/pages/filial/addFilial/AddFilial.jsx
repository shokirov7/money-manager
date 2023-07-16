import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'

function AddFilial() {
	const navigate = useNavigate()
	const handelReturn = () => {
		navigate("/filials")
	}
	return (
		<div className='products_add' onClick={() => handelReturn()}>
			<div className="products_add_welcome" onClick={(e) => e.stopPropagation()}>
				<p>Omborxona qo'shish</p>
				<Button go={"/filials"} text={"Qaytish"} />
			</div>
			<div className="products_add_form">
				<div className="form-container" onClick={(e) => e.stopPropagation()}>
					<div className="logo-container">
						Omborxona qo'shish
					</div>

					<form class="form">
						<div class="form-group">
							<label for="email">Filial</label>
							<input type="text" id="email" name="email" placeholder="Filialni qiriting" required="" />
							<label for="email">Telefon raqami</label>
							<input type="number" id="email" name="email" placeholder="Telefon raqamini qiriting" required="" />
							<label for="email">Manzil</label>
							<input type="text" id="email" name="email" placeholder="Manzilni qiriting" required="" />
						</div>

						<button class="form-submit-btn" type="submit">Qo'shish</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddFilial