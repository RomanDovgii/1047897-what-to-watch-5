import React from "react";
import Header from "./../header/header";
import SignIn from "./modules/sign-in";
import Footer from "../footer/footer";
import {onWTWLogoClickType} from "../types/types";

const HeaderSetting = {
  IS_USER_PAGE: true,
  IS_MY_LIST: false,
  IS_SIGN_IN: true,
  IS_NAVIGATION: false
};

const LoginPage = (props) => {
  const {onWTWLogoClick} = props;

  return (
    <div className="user-page">
      <Header
        isUserPage = {HeaderSetting.IS_USER_PAGE}
        isMyList = {HeaderSetting.IS_MY_LIST}
        isSignIn = {HeaderSetting.IS_SIGN_IN}
        isNavigation = {HeaderSetting.IS_NAVIGATION}
        isUserBlock = {HeaderSetting.IS_USER_BLOCK}
        onWTWLogoClick = {onWTWLogoClick}
      />
      <SignIn/>
      <Footer/>
    </div>
  );
};

LoginPage.propTypes = onWTWLogoClickType;

export default LoginPage;
