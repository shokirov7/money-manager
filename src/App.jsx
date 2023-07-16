import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Workers from "./pages/workers/Workers";
import Filial from "./pages/filial/Filial";
import Stats from "./pages/stats/Stats";
import Archive from "./pages/archive/Archive";
import Sidebar from "./components/sidebar/Sidebar";
import AddProducts from "./pages/products/addProducts/AddProducts";
import AddWorkers from "./pages/workers/addWorkers/AddWorkers";
import AddFilial from "./pages/filial/addFilial/AddFilial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="app_right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Addproducts" element={<AddProducts />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/Addworkers" element={<AddWorkers />} />
            <Route path="/filials" element={<Filial />} />
            <Route path="/Addfilials" element={<AddFilial />} />
            <Route path="/statistic" element={<Stats />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
