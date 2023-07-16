import React from "react";
import "./Stats.css";
import Button from "../../components/button/Button";
import Chart from "../../components/chart/Chart";
import BarChart from "../../components/barchart/BarChart";
import PolarChart from "../../components/polar/PolarChart";
import { Doughnut } from "react-chartjs-2";
import Nut from "../../components/nut/Nut";

function Stats() {
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
