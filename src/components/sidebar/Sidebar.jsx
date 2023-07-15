import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Sidebar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {BsBoxFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {FaWarehouse} from 'react-icons/fa'
import {IoIosAnalytics} from 'react-icons/io'
import {BiSolidArchiveIn} from 'react-icons/bi'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_logo">
        <img src="./src/assets/img/logo.png" alt="" />
        <div className="sidebar_links">
            <NavLink to="/"><AiFillHome/></NavLink>
            <NavLink to="/products"><BsBoxFill/></NavLink>
            <NavLink to="/workers"><FaUserAlt/></NavLink>
            <NavLink to="/filials"><FaWarehouse/></NavLink>
            <NavLink to="/statistic"><IoIosAnalytics/></NavLink>
            <NavLink to="/archive"><BiSolidArchiveIn/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
