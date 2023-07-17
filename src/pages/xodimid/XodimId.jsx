import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import authService from '../../api/axios';
import "./XodimId.css";

function XodimId() {
  const { id } = useParams();
  const [worker, setWorker] = useState([])
	const navigate = useNavigate()


	const getWorkerById = async () => {
		try {
			const { data } = await authService.WorkersMore(id)
			setWorker(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getWorkerById()
	}, [])

	const handleReturn = () => {
		navigate('/workers')
	}

	const handleRemove = async id => {
		await authService.WorkersRemove(id)

		handleReturn()
	}
  const handleArchive = async id => {
		await authService.cashWorker(id)

		handleReturn()
	}

  return (
    <div className="prod_id">
      <div className="product_card">
        <div className="pci_row">
          <div className="pci_title">Ism :</div>
          <div className="pci_value">{worker.ism}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Familiya :</div>
          <div className="pci_value">{worker.fam}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Username :</div>
          <div className="pci_value">{worker.username}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Password :</div>
          <div className="pci_value">{worker.password}</div>
        </div>
        <div className="pci_row">
          <div className="pci_title">Tel :</div>
          <div className="pci_value">{worker.tel}</div>
        </div>
        <div className="pci_btn">
          <button onClick={()=> {navigate("/workers")}}>Ortga</button>
          <button onClick={() => handleArchive(worker.id)}>Arxivlash</button>
          <button onClick={() => handleRemove(worker.id)}>O'chirish</button>
        </div>
      </div>
    </div>
  );
}

export default XodimId;
