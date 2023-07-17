import React, { useState } from 'react'
import './Profile.css'

function Profile() {

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="">
      <div className="profile_welcome">Sizning Profilingiz</div>
      {isActive ? (
        <div className="profile_main">
        <div className="profile_card">
          <div className="profile_avatar_row">
            <div className="profile_avatar"></div>
          </div>
          <div className="profile_row">
            <div className="profile_title">Akmaljon</div>
            <div className="profile_title">Pulatov</div>
          </div>
          <div className="profile_row_second">
            <div className="profile_title">Username:</div>
            <div className="profile_value">akmaljon</div>
          </div>
          <div className="profile_row_second">
            <div className="profile_title">Password:</div>
            <div className="profile_value">Otabek06/</div>
          </div>

          <div className="profile_btn">
            <button onClick={handleClick}>Ozgartirish</button>
          </div>
        </div>
      </div>
      ) : (
      <div className="form-container">
        <div className="logo-container">Profile ozgartirish</div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter new username"
              required=""
            />
            <label htmlFor="stock">Ism</label>
            <input
              type="text"
              id="stock"
              name="stock"
              placeholder="Enter new Ism"
              required=""
            />
            <label htmlFor="stock">Familiya</label>
            <input
              type="text"
              id="stock"
              name="stock"
              placeholder="Enter new Familiya"
              required=""
            />
            
          </div>
          <button onClick={handleClick} className="form-submit-btn" type="submit">
            Ozgartirish
          </button>
        </form>
      </div>
      )}
    </div>
  )
}

export default Profile
