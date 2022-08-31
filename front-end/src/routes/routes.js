import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import Welcome from "../pages/welcome/welcome";
import Dashboard from "../pages/dashboard/dashboard";
import Orders from "../pages/orders/orders";
import Promotions from "../pages/promotions/promotions";
import Menu from "../pages/menu/menu"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home" element={<Home />}>
      <Route path="/home/" element={<Navigate to="/home/dashboard" />} />
      <Route path="/home/dashboard" element={<Dashboard />} />
      <Route path="/home/orders" element={<Orders />} />
      <Route path="/home/promotions" element={<Promotions />} />
      <Route path="/home/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default Routers;
