import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import productService from '../../../api/productsApi'
import { columns } from './../tarqatma/TarqatmaTableData'
import UserProducts from '../products/UserProducts'

const Tarqatma = () => {
	const [data, setData] = useState([])
	const getTarqatma = async () => {
		try {
			const { data } = await productService.getTarqatmalar()
			console.log(data.details)
			setData(data.details)
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
			<UserProducts/>
      <div className="products_welcome">Tarqatmalar</div>
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
          height: "250px",
          fontWeight: "bold",
        }}
      />
		</div>
	)
}

export default Tarqatma
