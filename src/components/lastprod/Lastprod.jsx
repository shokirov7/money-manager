import React, { useEffect, useState } from "react";
import "./Lastprod.css";

function Lastprod({ name, price, num }) {
  return (
    <div className="lastprod">
      <div className="lastprod_num">{num}</div>
      <div className="lastprod_img">
        <p id="lastprod_img_text">Mahsulot rasmi</p>
      </div>
      <div className="lastprod_text">
        <div className="lastprod_name">{name}</div>
        <div className="lastprod_price">{price} so'm</div>
      </div>
    </div>
  );
}

export default Lastprod;
