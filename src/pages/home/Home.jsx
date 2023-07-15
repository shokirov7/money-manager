import React from "react";
import "./Home.css";
import Profitcard from "../../components/profitcard/Profitcard";
import Chart from "../../components/profitcard/chart/Chart";

function Home() {
  return (
    <div className="home">
      <div className="home_welcome">Xush kelibsiz!</div>
      <div className="home_holder">
        <div className="home_left">
          <div className="home_left_top">
            <Profitcard desc={"Mahsulotlar"}/>
            <Profitcard desc={"Umumiy daromad"}/>
          </div>
          <Chart/>
        </div>
        <div className="home_right"></div>
      </div>
    </div>
  );
}

export default Home;
