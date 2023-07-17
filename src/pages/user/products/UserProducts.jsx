import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./UserProductsTableData";
import productService from "../../../api/productsApi";

const UserProducts = () => {
  const [rows, setRows] = useState([]);

  const getProRow = async () => {
    try {
      const { data } = await productService.getProductsXodim();
      setRows(data.mahsulotlar);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProRow();
  }, []);

  return (
    <div className="products">
      <div className="products_welcome">Mahsulotlar</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        rowsPerPageOptions={[5]}
        className="custom-data-grid"
        classes={{
          row: "custom-row",
          viewport: "custom-viewport",
        }}
        style={{
          border: "none",
          fontFamily: "dm-med",
          fontSize: "18px",
          height: "250px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default UserProducts;
