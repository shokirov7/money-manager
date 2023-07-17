import React, { useEffect, useState } from 'react'
import BarChart from '../../components/barchart/BarChart'
import Button from '../../components/button/Button'
import Chart from '../../components/chart/Chart'
import Nut from '../../components/nut/Nut'
import PolarChart from '../../components/polar/PolarChart'
import { getItem } from '../../helpers/persistence-log'
import './Stats.css'
import productService from '../../api/productsApi'

function Stats() {
	const [data, setData] = useState(null)

  // stats by date
  const [id, setId] = useState()
	const [start_date, setStart_date] = useState('')
	const [end_date, setEnd_date] = useState('')

  const getStats = async e => {
		e.preventDefault()

		const starting = helperDate.nowDate(start_date ? start_date : '2023-05-06')
		const ending = helperDate.nowDate(end_date ? end_date : '2023-07-10')

		const db = {
			start_date: starting,
			end_date: ending,
			id: id ? id : '',
		}

		console.log(db)

		const { data } = await productService.getAllStats(db)
		setData(data)
		localStorage.setItem('total', JSON.stringify(data))
	}

	const getStatsDefault = async () => {
		const db = {
			start_date: '2023-05-06',
			end_date: '2023-07-10',
			id: '',
		}

		const { data } = await productService.getAllStats(db)
		setData(data)
		localStorage.setItem('total', JSON.stringify(data))
	}

  useEffect(()=>{
    getStatsDefault()
  },[])

	return (
		<div className='stats'>
			<div className='stats_welcome'>Statistika</div>
			<div className='stats_top'>
				<div className='input_block'>
					<p>Dan:</p>
					<input type='date' />
				</div>
				<div className='input_block'>
					<p>Gacha:</p>
					<input type='date' />
				</div>
				<Button text={"Ko'rish"} />
			</div>
			<div className='stats_holder'>
				<div className='chart_box'>
					{data && <Chart diagram={data?.filial_diagram} />}
				</div>
				<div className='chart_box'>
					{data && <BarChart diagram={data?.mahsulot_diagram} />}
				</div>
				<div className='chart_box'>
					{data && <PolarChart diagram={data?.filial_diagram} />}
				</div>
				<div className='chart_box'>
					{data && <Nut diagram={data?.mahsulot_diagram} />}
				</div>
			</div>
		</div>
	)
}

export default Stats
