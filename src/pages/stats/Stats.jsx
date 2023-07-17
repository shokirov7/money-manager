import React, { useState, useEffect } from "react";
import "./Stats.css";
import Button from "../../components/button/Button";
import Chart from "../../components/chart/Chart";
import BarChart from "../../components/barchart/BarChart";
import productService from '../../api/productsApi'
import PolarChart from "../../components/polar/PolarChart";
import { Doughnut } from "react-chartjs-2";
import Nut from "../../components/nut/Nut";

function Stats() {
  const [houses, setHouses] = useState([]);

  const getFilialsName = async () => {
    try {
      const { data } = await productService.getWhareHouses();

      setHouses(data);
    } catch (error) {
      console.log("Xatolik !");
    }
  };

  useEffect(() => {
		getFilialsName()
	}, [])

  return (
    <div className="stats">
      <div className="stats_welcome">Statistika</div>
      <div className="stats_top">
        <div className="input_block">
          <p>Dan:</p>
          <input type="date" />
        </div>
        <div className="input_block">
          <p>Gacha:</p>
          <input type="date" />
        </div>
        <div className="input_block">
          <p>Ombor:</p>
          <select
            onChange={(e) => setId(e.target.value)}
            value=''
            className="hover:text-white bg-transparent border-cyan-500 border-2 rounded-md  outline-none hover:bg-cyan-500 duration-300 hover:border-white"
          >
            {(houses &&
              houses.map((item) => (
                <option value={item.id}>{item.nom}</option>
              ))) || <option value="">Loading data...</option>}
          </select>
        </div>
        <Button text={"Ko'rish"} />
      </div>
      <div className="stats_holder">
        <div className="chart_box">
          <Chart />
        </div>
        <div className="chart_box">
          <BarChart />
        </div>
        <div className="chart_box">
          <PolarChart />
        </div>
        <div className="chart_box">
          <Nut />
        </div>
      </div>
    </div>
  );
}

export default Stats;
