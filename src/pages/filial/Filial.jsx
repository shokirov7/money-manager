import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Filial.css'
import FilialTable from './FilialTable'
import productService from '../../api/productsApi'

function Filial({role}) {
  const [data, setData] = useState(null)

	const getStatsDefault = async () => {
		const db = {
			start_date: '2023-05-06',
			end_date: '2023-07-10',
			id: '',
		}

		const { data } = await productService.getAllStats(db)
		setData(data)
		localStorage.setItem('total', JSON.stringify(data))
		console.log(data)
	}

	useEffect(() => {
		getStatsDefault()
	}, [])
  return (
		<div className='filials'>
			<div className='filials_welcome'>Filiallar</div>
			<div className='filials_top'>
					<Profitcard
						desc={'Mahsulotlar'}
						db={data?.mahsulotlar_soni}
						type={'dona'}
					/>
					<Profitcard
						db={data?.umumiy_daromad}
						type={"so'm"}
						desc={'Umumiy daromad'}
					/>
			</div>
			<FilialTable role={role} />
		</div>
	)
}

export default Filial
