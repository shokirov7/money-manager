import React from "react";
import Button from "../../components/button/Button";
import Profitcard from "../../components/profitcard/Profitcard";
import "./Archive.css";
import ArchiveProductsTable from "./ArchiveProductsTable";
import ArchiveWorkersTable from "./ArchiveWorkersTable";
import ArchiveFilialTable from "./ArchiveFilialTable";

function Archive() {
  return (
    <div className="archive">
      <div className="archive_welcome">Arxiv</div>
      <div className="archive_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <h1>Arxiv Mahsulotlar</h1>
      <ArchiveProductsTable/>
      <h1>Arxiv Xodimlar</h1>
      <ArchiveWorkersTable/>
      <h1>Arxiv Sotuvlar</h1>
      <ArchiveFilialTable/>
    </div>
  );
}

export default Archive;
