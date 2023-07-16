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

function App() {
  const role = getItem("role") ? getItem("role") : "user";
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="app_right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products role={role} />} />
            <Route path="/workers" element={<Workers role={role} />} />
            <Route path="/filials" element={<Filial role={role} />} />
            <Route path="/statistic" element={<Stats />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<ProductId />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
