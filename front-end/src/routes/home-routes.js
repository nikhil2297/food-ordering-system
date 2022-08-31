import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Orders from "../pages/orders/orders";
import Promotions from "../pages/promotions/promotions";
import Menu from "../pages/menu/menu"

const HomeRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default HomeRouters;
