import React, { useEffect } from "react"
import { AiFillHome } from "react-icons/ai"
import { BiSolidArchiveIn } from "react-icons/bi"
import { BsBoxFill } from "react-icons/bs"
import { FaUserAlt, FaWarehouse } from "react-icons/fa"
import { IoIosAnalytics } from "react-icons/io"
import { RxExit } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { getItem } from "../../helpers/persistence-log"
import { logOutUser } from '../../reducers/auth'
import "./Sidebar.css"

function Sidebar() {
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.reducer);
  const token = getItem("token");
	const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [token]);
  return (
		<div className='sidebar'>
			<div className='sidebar_logo'>
				<img src='./src/assets/img/logo.png' alt='' />
				<div className='sidebar_links'>
					<NavLink to='/'>
						<AiFillHome />
					</NavLink>
					<NavLink to='/products'>
						<BsBoxFill />
					</NavLink>
					<NavLink to='/workers'>
						<FaUserAlt />
					</NavLink>
					<NavLink to='/filials'>
						<FaWarehouse />
					</NavLink>
					<NavLink to='/statistic'>
						<IoIosAnalytics />
					</NavLink>
					<NavLink to='/archive'>
						<BiSolidArchiveIn />
					</NavLink>
					<button
						onClick={() =>{ 
							dispatch(logOutUser())
							navigate("/login") 
						}}
						className='sidebar_exit'
					>
						<RxExit />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;
