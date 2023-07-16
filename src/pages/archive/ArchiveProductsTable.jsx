import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./ArchiveProductsData";
import { useNavigate } from "react-router-dom";

function ArchiveProductsTable() {
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate();

  const getArchiveProducts = async () => {
    try {
      const { data } = await authService.getArchiveProducts();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArchiveProducts();
  }, []);

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/archive/${id}`);
  };

  return (
    <div className="">
      <div className="products">
        <div style={{ background: "white" }} className="">
          {addRow ? (
            <DataGrid
              key={addRow.length}
              rows={addRow}
              columns={columns}
              onRowClick={handleRow}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 4 },
                },
              }}
              rowsPerPageOptions={[4]}
              className="custom-data-grid"
              classes={{
                row: "custom-row",
                viewport: "custom-viewport",
              }}
              style={{
                border: "none",
                fontFamily: "dm-med", // Замените на нужный вам шрифт или шрифты
                fontSize: "18px", // Замените на нужный вам размер шрифта
                fontWeight: "bold", // Замените на нужный вам начертание шрифта
              }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArchiveProductsTable;
