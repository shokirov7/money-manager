import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import productService from '../../../api/productsApi'
import UserProducts from '../Products/UserProducts'
import { columns } from './../tarqatma/TarqatmaTableData'

const Tarqatma = () => {
	const [data, setData] = useState([])
	const getTarqatma = async () => {
		try {
			const { data } = await productService.getTarqatmalar()
			console.log(data)
			setData(data)
		} catch (error) {
			console.log(error.request)
		}
	}

  console.log(data);
	const [houses, setHouses] = useState([])

	useEffect(() => {
		getTarqatma()
	}, [])
	return (
		<div className="products">
      <div className="products_welcome">Tarqatmalar</div>
			<UserProducts/>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        rowsPerPageOptions={[5]}
        className="custom-data-grid"
        classes={{
          row: "custom-row",
          viewport: "custom-viewport",
        }}
        style={{
          border: "none",
          fontFamily: "dm-med",
          fontSize: "18px",
          height: "420px",
          fontWeight: "bold",
        }}
      />
		</div>
	)
}

export default Tarqatma
