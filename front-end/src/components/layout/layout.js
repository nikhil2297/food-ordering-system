import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "../../routes/routes";
import Header from "../header/header";
const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
};

export default Layout;
