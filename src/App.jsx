import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Workers from "./pages/workers/Workers";
import Filial from "./pages/filial/Filial";
import Stats from "./pages/stats/Stats";
import Archive from "./pages/archive/Archive";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import { getItem } from "./helpers/persistence-log";
import { useSelector } from "react-redux";
import ProductId from "./pages/productsid/ProductId";
import SotuvId from "./pages/sotuvid/SotuvId";
import XodimId from "./pages/xodimid/XodimId";
import FilialId from "./pages/filialid/FilialId";
import XodimHome from "./pages/user/home/XodimHome";
import UserProducts from "./pages/user/Products/UserProducts";
import Tarqatma from "./pages/user/Tarqatma/Tarqatma";
import Profile from "./pages/user/profile/Profile";

function App() {
  const role = getItem("role") ? getItem("role") : "user";
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar role={role} />
        <div className="app_right">
          {role === "admin" ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/workers" element={<Workers />} />
              <Route path="/filials" element={<Filial />} />
              <Route path="/statistic" element={<Stats />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products/:id" element={<ProductId />} />
              <Route path="/sales/:id" element={<SotuvId />} />
              <Route path="/workers/:id" element={<XodimId />} />
              <Route path="/filials/:id" element={<FilialId />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<XodimHome />} />
              <Route path="/products" element={<UserProducts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tarqatmalar" element={<Tarqatma />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
