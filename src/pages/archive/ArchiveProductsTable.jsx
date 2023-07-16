import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./FilialTableData.js";
import { useNavigate } from "react-router-dom";

function ArchiveProductsTable() {
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate()

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

  const handleRow = item => {
		const id = item.row.id
		navigate(`/products/${id}`)
	}

  return (
    <div className="">
      <div className="archiveworkers">
        <div style={{ background: "white" }} className="">
          {addRow.length > 0 ? (
            <DataGrid
              key={addRow.length}
              rows={addRow}
              columns={columns}
              onRowClick={handleRow}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              rowsPerPageOptions={[4]}
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