import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import authServicee from "../../api/productsApi";
import { columns } from "./FilialTableData.js";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function FilialTable({ role }) {
  const [isActive, setIsActive] = useState(true);
  const [addRow, setAddRows] = useState([]);
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [manzil, setManzil] = useState("");
  const navigate = useNavigate();

  const getWhareHouses = async () => {
    try {
      const { data } = await authService.getWhareHouses();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWhareHouses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      nom: nom,
      tel: tel,
      manzil: manzil,
      deleted: false,
    };

    const settingWhareHouse = async (products) => {
      try {
        const { data } = await authServicee.setWhareHouse(products);
        setAddRows((prew) => [...prew, data]);
      } catch (error) {
        console.log(error);
      }
    };
    settingWhareHouse(newRow);
    setIsActive(!isActive);
  };

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/filials/${id}`);
  };

  return (
    <div className="">
      <div className="filials">
      <div className="add-btn">
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="form-submit-btn"
            type="submit"
          >
            {!isActive ? "Ortga" : "Ombor qo'shish"}
          </button>
        </div>

        {isActive ? (
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
                  height: "420px",
                  fontWeight: "bold",
                }}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ) : (
          <div className="form-container">
            <div className="logo-container">Ombor qo'shish</div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nomi</label>
                <input
                  onChange={(e) => setNom(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  required=""
                />
                <label htmlFor="stock">Tel</label>
                <input
                  onChange={(e) => setTel(e.target.value)}
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Enter stock amount"
                  required=""
                />
                <label htmlFor="brand">Manzil</label>
                <input
                  onChange={(e) => setManzil(e.target.value)}
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Enter brand"
                  required=""
                />
              </div>
              <button className="form-submit-btn" type="submit">
                Qo'shish
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilialTable;
