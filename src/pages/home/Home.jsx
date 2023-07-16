import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Profitcard from "../../components/profitcard/Profitcard";
import Chart from "../../components/profitcard/chart/Chart";
import Lastprod from "../../components/lastprod/Lastprod";

function Home() {
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
                    <li><Lastprod/></li>
                    <li><Lastprod/></li>
                    <li><Lastprod/></li>
                    <li><Lastprod/></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
