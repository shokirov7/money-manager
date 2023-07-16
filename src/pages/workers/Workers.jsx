import React from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Workers.css'

function Workers() {
  return (
    <div className='workers'>
      <div className="workers_welcome">Xodimlar</div>
      <div className="workers_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <div className="workers_table">
        <div className="workers_table_titles">
          <div className="workers_table_title">id</div>
          <div className="workers_table_title">Ism</div>
          <div className="workers_table_title">Familiya</div>
          <div className="workers_table_title">Username</div>
          <div className="workers_table_title">Password</div>
          <div className="workers_table_title">Ombor</div>
          <div className="workers_table_title">KPI</div>
          <div className="workers_table_title">Tel</div>
          <Button go={'/Addworkers'} text={"Qo'shish"}/>
        </div>
        <div className="workers_table_cards">
          <div className="workers_table_card">
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">Amir</div>
            <div className="workers_table_title">Gerbiona</div>
            <div className="workers_table_title">granger22</div>
            <div className="workers_table_title">shokiriv2006</div>
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">22</div>
            <div className="workers_table_title">+998911591516</div>
          </div>
          <div className="workers_table_card">
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">Amir</div>
            <div className="workers_table_title">Gerbiona</div>
            <div className="workers_table_title">granger22</div>
            <div className="workers_table_title">shokiriv2006</div>
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">22</div>
            <div className="workers_table_title">+998911591516</div>
          </div>
          <div className="workers_table_card">
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">Amir</div>
            <div className="workers_table_title">Gerbiona</div>
            <div className="workers_table_title">granger22</div>
            <div className="workers_table_title">shokiriv2006</div>
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">22</div>
            <div className="workers_table_title">+998911591516</div>
          </div>
          <div className="workers_table_card">
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">Amir</div>
            <div className="workers_table_title">Gerbiona</div>
            <div className="workers_table_title">granger22</div>
            <div className="workers_table_title">shokiriv2006</div>
            <div className="workers_table_title">1</div>
            <div className="workers_table_title">22</div>
            <div className="workers_table_title">+998911591516</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workers
