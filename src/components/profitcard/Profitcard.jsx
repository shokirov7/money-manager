import React from "react";
import "./Profitcard.css";
import { TbMoneybag } from "react-icons/tb";

function Profitcard({ desc }) {
  return (
    <div className="profitcard">
      <div className="profc_desc">{desc}</div>
      <div className="profc_value">1 500 000</div>
    </div>
  );
}

export default Profitcard;
