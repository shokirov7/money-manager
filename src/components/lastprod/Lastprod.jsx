import React from "react";
import "./Lastprod.css";

function Lastprod({name, price}) {
  return (
    <div className="lastprod">
      <div className="lastprod_num">1</div>
      <div className="lastprod_img"><p>Mahsulot rasmi</p></div>
      <div className="lastprod_text">
        <div className="lastprod_name">Coca Cola</div>
        <div className="lastprod_price">6000 so'm</div>
      </div>
    </div>
  );
}

export default Lastprod;
