import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import './AddProducts.css'

function AddProducts() {
	const navigate = useNavigate()
	const handelReturn = () => {
		navigate("/products")
	}

	return (
		<div className='products_add' onClick={() => handelReturn()}>
			<div className="products_add_welcome" onClick={(e) => e.stopPropagation()}>
				<p>Mahsulotlar qo'shish</p>
				<Button go={"/products"} text={"Qaytish"} />
			</div>
			<div className="products_add_form">
			<div className="form-container" onClick={(e) => e.stopPropagation()}>
				<div className="logo-container">
					Mahsulot qo'shish
				</div>

				<form class="form">
					<div class="form-group">
						<label for="email">Mahsulot nomi</label>
						<input type="text" id="email" name="email" placeholder="Mahsulot nomini qiriting" required="" />
						<label for="email">Mahsulot Brendi</label>
						<input type="text" id="email" name="email" placeholder="Brendini qiriting" required="" />
						<label for="email">Tannarx</label>
						<input type="number" id="email" name="email" placeholder="Tannarxni qiriting" required="" />
						<label for="email">Sotuv Narx</label>
						<input type="number" id="email" name="email" placeholder="Sotuv narxni qiriting" required="" />
					</div>

					<button class="form-submit-btn" type="submit">Qo'shish</button>
				</form>
			</div>
			</div>
		</div>
	)
}

export default AddProducts