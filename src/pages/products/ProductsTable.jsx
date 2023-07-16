import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios";
import { columns } from "./ProductsTableData";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import {
  getProductsFailure,
  getProductsStarted,
  getProductsSuccess,
} from "../../reducers/product";

function ProductsTable({ role }) {
  const [isActive, setIsActive] = useState(true);
  const [addRow, setAddRows] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [mainPrice, setMainPrice] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(getProductsStarted());
    try {
      const { data } = await authService.getProducts();
      setAddRows(data);
    } catch (error) {
      dispatch(getProductsFailure(error));
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      narx1: price,
      narx2: mainPrice,
      nom: name,
      brand: brand,
      deleted: false,
    };

    const settingProducts = async (products) => {
      try {
        const { data } = await authService.setProducts(products);
        setAddRows((prew) => [...prew, data]);
      } catch (error) {
        console.log(error);
      }
    };
    settingProducts(newRow);
    setIsActive(!isActive);
  };

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/products/${id}`);
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
            {!isActive ? "Ortga" : "Mahsulot qo'shish"}
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
            <div className="logo-container">Mahsulot qo'shish</div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nomi</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  required=""
                />
                <label htmlFor="stock">Mahsulot Brendi</label>
                <input
                  onChange={(e) => setBrand(e.target.value)}
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Enter stock amount"
                  required=""
                />
                <label htmlFor="brand">Tannarx</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  id="brand"
                  name="brand"
                  placeholder="Enter brand"
                  required=""
                />
                <label htmlFor="date">Sotuvnarx</label>
                <input
                  onChange={(e) => setMainPrice(e.target.value)}
                  type="number"
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

export default ProductsTable;
