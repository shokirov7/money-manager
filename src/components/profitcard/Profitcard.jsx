import React from "react";
import "./Profitcard.css";
import { TbMoneybag } from "react-icons/tb";

function Profitcard({ desc, db, type}) {
  return (
    <div className="profitcard">
      <div className="profc_desc">{desc}</div>
      <div className="profc_value">{db} {type}</div>
    </div>
  );
}

export default Profitcard;
