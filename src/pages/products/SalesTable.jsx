import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./SalesTableData";
import { useNavigate } from "react-router-dom";
import productService from "../../api/productsApi";

function SalesTable() {
  const [isActive, setIsActive] = useState(true);
  const [addRow, setAddRows] = useState([]);
  const [mahsulot, setMahsulot] = useState(1);
  const [miqdor, setMiqdor] = useState(0);
  const [ombor, setOmbor] = useState(1);
  const [xodim, setXodim] = useState(1);
  const [sana, setSana] = useState("");
  const navigate = useNavigate();

  const getCash = async () => {
    try {
      const { data } = await authService.getCash();
      setAddRows(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [houses, setHouses] = useState([]);

  const getFilialsName = async () => {
    try {
      const { data } = await productService.getWhareHouses();

      setHouses(data);
    } catch (error) {
      console.log("Xatolik !");
    }
  };
  const [nameProducts, setNameProducts] = useState([]);

  const getProductsName = async () => {
    try {
      const { data } = await authService.getProducts();
      setNameProducts(data);
    } catch (error) {
      console.log("Xatolik !");
    }
  };

  const [workers, setWorkers] = useState([]);

  const getWorkersName = async () => {
    try {
      const { data } = await authService.getWorkers();

      // console.log(data)
      setWorkers(data);
    } catch (error) {
      console.log("Xatolik !");
    }
  };

  useEffect(() => {
    getCash();
    getFilialsName();
    getProductsName();
    getWorkersName();
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRow = {
      mahsulot: Number(mahsulot),
      miqdor: Number(miqdor),
      ombor: Number(ombor),
      sana: sana,
      xodim: Number(xodim),
    };

    const settingCash = async (post) => {
      try {
        console.log(post);
        const { data } = await authService.setCash(post);
        setAddRows((prew) => [...prew, data]);
        setIsActive(!isActive);
      } catch (error) {
        alert(error.request.response);
      }
    };
    settingCash(newRow);
  };

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/sales/${id}`);
  };

  return (
    <div className="">
      <div className="sales">
        <div className="add-btn">
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="form-submit-btn"
            type="submit"
          >
            {!isActive ? "Ortga" : "Sotuv qo'shish"}
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
                  fontWeight: "bold",
                }}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ) : (
          <div className="form-container">
            <div className="logo-container">Sotuv qo'shish</div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Mahsulot</label>
                <select
                  onChange={(e) => setMahsulot(e.target.value)}
                  value={mahsulot}
                  className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                >
                  {(nameProducts &&
                    nameProducts.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nom}
                      </option>
                    ))) || <option value="">Loading data...</option>}
                </select>
                <label htmlFor="stock">Miqdor</label>
                <input
                  onChange={(e) => setMiqdor(e.target.value)}
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="Enter stock amount"
                  required=""
                />
                <label htmlFor="brand">Ombor</label>
                <select
                  onChange={(e) => setOmbor(e.target.value)}
                  value={ombor}
                  className=""
                >
                  {(houses &&
                    houses.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nom}
                      </option>
                    ))) || <option value="">Loading data...</option>}
                </select>
                <label htmlFor="date">Xodim</label>
                <select
                  value={xodim}
                  onChange={(e) => setXodim(e.target.value)}
                  className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                >
                  {(workers &&
                    workers.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.username}
                      </option>
                    ))) || <option value="">Loading data...</option>}
                </select>
                <label htmlFor="date">Sana</label>
                <input
                  onChange={(e) => setSana(e.target.value)}
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Enter date"
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

export default SalesTable;
