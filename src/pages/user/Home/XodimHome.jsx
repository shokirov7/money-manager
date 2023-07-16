import React, { useEffect, useState } from "react";
import "./XodimHome.css";
import { Link } from "react-router-dom";
import Profitcard from "../../../components/profitcard/Profitcard";
import Chart from "../../../components/chart/Chart";
import authService from "../../../api/axios";
import Lastprod from "../../../components/lastprod/Lastprod";
import Bar from "../../../components/barchart/BarChart";

function XodimHome() {
  const [rows, setRows] = useState([]) 
	const getProRow = async ()=> {
		try {
			const {data} = await productService.getProductsXodim()

			// setRows(data)
			setRows(data.mahsulotlar)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(()=> {
		getProRow()
	},[])

  return (
    <div className="home">
      <div className="home_welcome">Xush kelibsiz!</div>
      <div className="home_holder">
        <div className="home_left">
          <div className="home_left_top">
            <Profitcard desc={"Mahsulotlar"} />
            <Profitcard desc={"Umumiy daromad"} />
          </div>
          <Chart />
        </div>
        <div className="home_right">
          <div className="home_last_products">
            <div className="home_lp_top">
              <p>Oxirgi mahsulotlar</p>
              <Link to="/products">Barchasi &gt;</Link>
            </div>
            <div className="home_products">
              <ul>
                {rows.slice(rows.length - 4, rows.length).map((item, i) => (
                  <li key={i}>
                    <Lastprod num={i + 1} name={item.nom} price={item.narx2} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Bar />
        </div>
      </div>
    </div>
  );
}

export default XodimHome;
