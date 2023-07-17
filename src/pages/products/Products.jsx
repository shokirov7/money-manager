import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Profitcard from "../../components/profitcard/Profitcard";
import "./Products.css";
import ProductsTable from "./ProductsTable";
import SalesTable from "./SalesTable";
import productService from '../../api/productsApi'

function Products({ role }) {
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
    console.log(data);
	}

  useEffect(()=>{
    getStatsDefault()
  },[])

  return (
    <div className="products">
      <div className="products_welcome">Mahsulotlar</div>
      <div className="products_top">
        <Profitcard desc={"Mahsulotlar"} db={data?.mahsulotlar_soni} type={'dona'} />
        <Profitcard db={data?.umumiy_daromad} type={"so'm"} desc={"Umumiy daromad"} />
      </div>
      <ProductsTable role={role} />
      <SalesTable role={role} />{" "}
    </div>
  );
}

export default Products;
