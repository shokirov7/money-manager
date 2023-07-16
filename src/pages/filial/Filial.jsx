import React from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Filial.css'
import FilialTable from './FilialTable'

function Filial() {
  return (
    <div className='filials'>
      <div className="filials_welcome">Omborxonalar</div>
      <div className="filials_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      {/* <div className="filials_table">
        <div className="filials_table_titles">
          <div className="filials_table_title">id</div>
          <div className="filials_table_title">Manzil</div>
          <div className="filials_table_title">Telefon raqami</div>
          <div className="filials_table_title">Nom</div>
          <Button text={"Qo'shish"}/>
        </div>
        <div className="filials_table_cards">
          <div className="filials_table_card">
            <div className="filials_table_title">1</div>
            <div className="filials_table_title">Marg'ilon sh. Sohibqiron Temur k. 1-uy</div>
            <div className="filials_table_title">+998907791449</div>
            <div className="filials_table_title">Namangan</div>
          </div>
          <div className="filials_table_card">
            <div className="filials_table_title">1</div>
            <div className="filials_table_title">Marg'ilon sh. Sohibqiron Temur k. 1-uy</div>
            <div className="filials_table_title">+998907791449</div>
            <div className="filials_table_title">Namangan</div>
          </div>
          <div className="filials_table_card">
            <div className="filials_table_title">1</div>
            <div className="filials_table_title">Marg'ilon sh. Sohibqiron Temur k. 1-uy</div>
            <div className="filials_table_title">+998907791449</div>
            <div className="filials_table_title">Namangan</div>
          </div>
          <div className="filials_table_card">
            <div className="filials_table_title">1</div>
            <div className="filials_table_title">Marg'ilon sh. Sohibqiron Temur k. 1-uy</div>
            <div className="filials_table_title">+998907791449</div>
            <div className="filials_table_title">Namangan</div>
          </div>
        </div>
      </div> */}
      <FilialTable/>
    </div>
  )
}

export default Filial
