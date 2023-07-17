import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./ArchiveWorkersData";
import { useNavigate } from "react-router-dom";

function ArchiveWorkersTable() {
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate();

  const getArchiveWorkers = async () => {
    try {
      const { data } = await authService.getArchiveWorkers();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArchiveWorkers();
  }, []);

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/archive/${id}`);
  };

  return (
    <div className="">
      <div className="workers">
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
                height: "400px",
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

export default ArchiveWorkersTable;
