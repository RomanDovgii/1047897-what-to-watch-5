import React from "react";
import Header from "./modules/header";
import Catalog from "./modules/catalog";
import Footer from "../footer/footer";

const MyListPage = () => {
  return (
    <div className="user-page">
      <Header/>
      <Catalog/>
      <Footer/>
    </div>
  );
};

export default MyListPage;
