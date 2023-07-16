import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./FilialTableData.js";
import { useNavigate } from "react-router-dom";

function ArchiveFilialTable() {
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate()

  const getArchiveWarehouses = async () => {
    try {
      const { data } = await authService.getArchiveWarehouses();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArchiveWarehouses();
  }, []);

  const handleRow = item => {
		const id = item.row.id
		navigate(`/filials/${id}`)
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

export default ArchiveFilialTable;