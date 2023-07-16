import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../../api/axios";
import "./FilialId.css";

function FilialId() {
  const { id } = useParams();
  const [filial, setFilial] = useState([]);
  const navigate = useNavigate();

  const getFilialrById = async () => {
    try {
      const { data } = await authService.WhareHouseMore(id);
      setFilial(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFilialrById();
  }, []);

  const handleReturn = () => {
    navigate("/filials");
  };

  const handleRemove = async (id) => {
    await authService.WhareHouseRemove(id);

    handleReturn();
  };

  return (
    <div className="prod_id">
      <div className="product_card">
        <div className="pci_row">
          <div className="pci_title">Nom :</div>
          <div className="pci_value">{filial.nom}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Manzil :</div>
          <div className="pci_value">{filial.manzil}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Tel :</div>
          <div className="pci_value">{filial.tel}</div>
        </div>
        <div className="pci_btn">
          <button
            onClick={() => {
              navigate("/filials");
            }}
          >
            Ortga
          </button>
          <button onClick={() => handleRemove(filial.id)}>O'chirish</button>
        </div>
      </div>
    </div>
  );
}

export default FilialId;
