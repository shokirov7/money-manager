import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./WorkersTableData";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function WorkersTable({ role }) {
  const [isActive, setIsActive] = useState(true);
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [fam, setFam] = useState("");
  const [kpi, setKpi] = useState(0);
  const [ombor, setOmbor] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRow = {
      username: username,
      password: password,
      ism: name,
      fam: fam,
      ombor: ombor,
      tel: tel,
      kpi: kpi,
      deleted: false,
    };

    try {
      const data = await authService.setWorkers(newRow);
    } catch (error) {
      console.log(error);
    }

    setIsActive(!isActive);
  };

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/workers/${id}`);
  };

  return (
    <div className="">
      <div className="workers">
        {role === "admin" ? (
          <div className="add-btn">
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="form-submit-btn"
              type="submit"
            >
              {!isActive ? "Ortga" : "Xodim qo'shish"}
            </button>
          </div>
        ) : (
          ""
        )}
        {!isActive ? (
          <div className="form-container">
            <div className="logo-container">Xodim qo'shish</div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Lastname</label>
                <input
                  onChange={(e) => setFam(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Lastname"
                  required=""
                />
                <label htmlFor="stock">Fullname</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Enter Name"
                  required=""
                />
                <label htmlFor="brand">KPI</label>
                <input
                  onChange={(e) => setKpi(e.target.value)}
                  type="number"
                  id="brand"
                  name="brand"
                  placeholder="Enter KPI"
                  required=""
                />
                <label htmlFor="date">Ombor</label>
                <input
                  onChange={(e) => setOmbor(e.target.value)}
                  type="number"
                  id="date"
                  name="date"
                  placeholder="Enter warehouse"
                  required=""
                />
                <label htmlFor="date">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Enter password"
                  required=""
                />
                <label htmlFor="date">Tel</label>
                <input
                  onChange={(e) => setTel(e.target.value)}
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Enter tel"
                  required=""
                />
                <label htmlFor="date">Username</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Enter username"
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
