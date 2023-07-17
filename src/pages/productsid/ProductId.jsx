import React, { useState, useEffect } from "react";
import authService from "../../api/axios";
import "./ProductId.css";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";

function ProductId() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProductOnId = async () => {
    try {
      const { data } = await authService.productMore(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductOnId();
  }, []);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/products");
  };

  const handleRemove = async (id) => {
    const bool = confirm("Butunlay bazadan o'chirishni istaysizmi ?");

    if (bool) {
      await authService.removeProduct(id);

      handleReturn();
    } else {
      await authService.cashDelete(id);

      handleReturn();
    }
  };
  const handleArchive = async id => {
		await authService.cashProduct(id)

		handleReturn()
	}

  return (
    <div className="prod_id">
      <div className="product_card">
        <div className="pci_row">
          <div className="pci_title">Mahsulor nomi :</div>
          <div className="pci_value">{product.nom}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Tannarx :</div>
          <div className="pci_value">{product.narx1}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Sotuv narx :</div>
          <div className="pci_value">{product.narx2}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Mahsulot brendi :</div>
          <div className="pci_value">{product.brand}</div>
        </div>
        <div className="pci_btn">
          <button onClick={()=> {navigate("/products");}}>Ortga</button>
          <button onClick={() => handleArchive(product.id)}>Arxivlash</button>
          <button onClick={() => handleRemove(product.id)}>O'chirish</button>
        </div>
      </div>
    </div>
  );
}

export default ProductId;
