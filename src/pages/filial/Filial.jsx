import React from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Filial.css'
import FilialTable from './FilialTable'

function Filial({role}) {
  return (
    <div className='filials'>
      <div className="filials_welcome">Omborxonalar</div>
      <div className="filials_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <FilialTable role={role}/>
    </div>
  )
}

export default Filial
