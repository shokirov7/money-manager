import React from 'react'
import Button from '../../components/button/Button'
import Profitcard from '../../components/profitcard/Profitcard'
import './Workers.css'
import WorkersTable from './WorkersTable'

function Workers({role}) {
  return (
    <div className='workers'>
      <div className="workers_welcome">Xodimlar</div>
      <div className="workers_top">
        <Profitcard desc={"Mahsulotlar"} />
        <Profitcard desc={"Umumiy daromad"} />
      </div>
      <WorkersTable role={role}/>
    </div>
  )
}

export default Workers
