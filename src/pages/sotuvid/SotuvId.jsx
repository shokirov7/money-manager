import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productService from "../../api/productsApi";
import "./SotuvId.css";

function SotuvId() {
  const { id } = useParams();
  const [cash, setCash] = useState([]);
  const navigate = useNavigate();

  const getCashById = async () => {
    try {
      const { data } = await productService.CashMore(id);
      setCash(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCashById();
  }, []);

  const handleReturn = () => {
    navigate("/products");
  };

  const handleRemove = async (id) => {
    await productService.CashRemove(id);

    handleReturn();
  };

  return (
    <div className="prod_id">
      <div className="product_card">
        <div className="pci_row">
          <div className="pci_title">Mahsulor nomi :</div>
          <div className="pci_value">{cash.mahsulot_nomi}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Miqdor :</div>
          <div className="pci_value">{cash.miqdor}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Ombor :</div>
          <div className="pci_value">{cash.ombor_nomi}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Xodim :</div>
          <div className="pci_value">{cash.xodim_ism}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Sana :</div>
          <div className="pci_value">{cash.sana}</div>
        </div>
        <div className="pci_btn">
          <button
            onClick={() => {
              navigate("/products");
            }}
          >
            Ortga
          </button>
          <button onClick={() => handleRemove(cash.id)}>O'chirish</button>
        </div>
      </div>
    </div>
  );
}

export default SotuvId;
