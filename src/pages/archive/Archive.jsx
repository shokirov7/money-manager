import React from "react";
import Button from "../../components/button/Button";
import Profitcard from "../../components/profitcard/Profitcard";
import "./Archive.css";
import ArchiveProductsTable from "./ArchiveProductsTable";
import ArchiveWorkersTable from "./ArchiveWorkersTable";
import ArchiveFilialTable from "./ArchiveFilialTable";
import Products from "../products/Products";
import Workers from "../workers/Workers";
import SalesTable from "../products/SalesTable";
import ProductsTable from "../products/ProductsTable";
import WorkersTable from "../workers/WorkersTable";

function Archive() {
  return (
    <div className="archive">
      <div className="archive_welcome">Arxiv</div>
      <div className="archive_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <h1>Mahsulotlar</h1>
      <ProductsTable />
      <h1>Xodimlar</h1>
      <WorkersTable />
      <h1>Arxiv Mahsulotlar</h1>
      <ArchiveProductsTable />
      <h1>Arxiv Xodimlar</h1>
      <ArchiveWorkersTable />
    </div>
  );
}

export default Archive;
