import React from "react";
import Header from "../header/header";
import Catalog from "./modules/catalog";
import Footer from "../footer/footer";

const HeaderSetting = {
  IS_USER_PAGE: true,
  IS_MY_LIST: true,
  IS_SIGN_IN: false,
  IS_NAVIGATION: false,
  IS_USER_BLOCK: true
};

const MyListPage = () => {
  return (
    <div className="user-page">
      <Header
        isUserPage = {HeaderSetting.IS_USER_PAGE}
        isMyList = {HeaderSetting.IS_MY_LIST}
        isSignIn = {HeaderSetting.IS_SIGN_IN}
        isNavigation = {HeaderSetting.IS_NAVIGATION}
        isUserBlock = {HeaderSetting.IS_USER_BLOCK}
      />
      <Catalog/>
      <Footer/>
    </div>
  );
};

export default MyListPage;
