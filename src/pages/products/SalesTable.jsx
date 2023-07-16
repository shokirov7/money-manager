import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./SalesTableData";
import { useNavigate } from "react-router-dom";

function SalesTable() {
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate();

  const getCash = async () => {
    try {
      const { data } = await authService.getCash();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCash();
  }, []);

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/products/${id}`);
  };

  return (
    <div className="">
      <div className="sales">
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
                fontFamily: "dm-med", 
                fontSize: "18px", 
                fontWeight: "bold",
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

export default SalesTable;
