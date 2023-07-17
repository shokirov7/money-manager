import React, { useState, useEffect } from "react";
import authService from "../../../api/axios";
import productService from "../../../api/productsApi";
import { setItem } from "../../../helpers/persistence-log";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import "./Profile.css";

function Profile() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const [user, setUser] = useState([]);
  const [active, setActive] = useState(false);

  const [visible, setVisible] = useState(false);

  const [userName, setUserName] = useState("");
  const [ism, setIsm] = useState("");
  const [fam, setFam] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const profileData = async () => {
    try {
      const { data } = await authService.getUser();
      setUser(data.details);
      console.log(data.details);
      setItem("ombor_id", data.details.ombor);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const users = {
        username: userName,
        ism: ism,
        fam: fam,
        tel: number,
        ombor: user.ombor,
        password: password,
      };
      const data = await productService.updateProfileUser(users);
      alert("Updated profile");
    } catch (error) {
      console.log(error);
    }
  };

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
              <div className="profile_title">{user.ism}</div>
              <div className="profile_title">{user.fam}</div>
            </div>
            <div className="profile_row_second">
              <div className="profile_title">Username:</div>
              <div className="profile_value">{user.username}</div>
            </div>
            <div className="profile_row_second">
              <div className="profile_title">Ombor:</div>
              <div className="profile_value">{user.ombor_nomi}</div>
            </div>
            <div className="profile_row_second">
              <div className="profile_title">KPI:</div>
              <div className="profile_value">{user.kpi}</div>
            </div>
            <div className="profile_row_second">
              <div className="profile_title">Tel:</div>
              <div className="profile_value">{user.tel}</div>
            </div>
            <div className="profile_row_second">
              <div className="profile_title">Password:</div>

              <div className="profile_value profile_password">
                {visible === false ? (
                  <div className="profile_pass">*********</div>
                ) : (
                  <div className="profile_pass">{user.password}</div>
                )}
                {visible === false ? (
                  <button
                    onClick={() => {
                      setVisible(true);
                    }}
                    className="show_pass"
                  >
                    <AiFillEyeInvisible />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setVisible(false);
                    }}
                    className="show_pass"
                  >
                    <AiFillEye />
                  </button>
                )}
              </div>
            </div>

            <div className="profile_btn">
              <button onClick={handleClick}>Ozgartirish</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div className="logo-container">Profile ozgartirish</div>
          <form className="form" onSubmit={updateProfile}>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={user.username}
                required=""
              />
              <label htmlFor="stock">Ism</label>
              <input onChange={e => setIsm(e.target.value)}
                type="text"
                id="stock"
                name="stock"
                placeholder={user.ism}
                required=""
              />
              <label htmlFor="stock">Familiya</label>
              <input onChange={e => setFam(e.target.value)}
                type="text"
                id="stock"
                name="stock"
                placeholder={user.fam}
                required=""
              />
              <label htmlFor="stock">Tel</label>
              <input onChange={e => setNumber(e.target.value)}
                type="text"
                id="stock"
                name="stock"
                placeholder={user.tel}
                required=""
              />
              <label htmlFor="stock">Password</label>
              <input onChange={e => setPassword(e.target.value)}
                type="text"
                id="stock"
                name="stock"
                placeholder={user.password}
                required=""
              />
            </div>
            <div className="bottom_btns">
              <button
                onClick={handleClick}
                className="form-submit-btn"
              >
                Ortga
              </button>
              <button
                onClick={handleClick}
                className="form-submit-btn"
                type="submit"
              >
                Ozgartirish
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
