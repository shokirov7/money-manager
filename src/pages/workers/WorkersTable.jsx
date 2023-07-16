import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./WorkersTableData";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function WorkersTable({role}) {
  const [isActive, setIsActive] = useState(false);
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate();

  const getWorkers = async () => {
    try {
      const { data } = await authService.getWorkers();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkers();
  }, []);

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/workers/${id}`);
  };

  return (
    <div className="">
      <div className="workers">
      {role === "admin" ? (
          <div className="add-btn">
            {isActive ? (
              <Button
                onClick={() => {
                  setIsActive(!isActive);
                }}
                text={"Ortga"}
              />
            ) : (
              <Button
              go={'/Addworkers'}
                onClick={() => {
                  setIsActive(isActive);
                }}
                text={"Mahsulot q'oshish"}
              />
            )}
          </div>
        ) : (
          ""
        )}
        {isActive ? (
          <div className="form-container">
            <div className="logo-container">Mahsulot qo'shish</div>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Nomi</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  required=""
                />
                <label htmlFor="stock">Ombor</label>
                <input
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Enter stock amount"
                  required=""
                />
                <label htmlFor="brand">Brend</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Enter brand"
                  required=""
                />
                <label htmlFor="date">Sana</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Enter date"
                  required=""
                />
              </div>
              <button
                onClick={() => {
                  setIsActive(false);
                }}
                className="form-submit-btn"
                type="submit"
              >
                Qo'shish
              </button>
            </form>
          </div>
        ) : (
          <div style={{ background: "transparent" }} className="">
            {addRow ? (
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
                  fontWeight: "bold",
                }}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkersTable;