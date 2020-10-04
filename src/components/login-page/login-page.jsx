import React from "react";
import Header from "./../header/header";
import SignIn from "./modules/sign-in";
import Footer from "../footer/footer";

const headerSettings = {
  IS_USER_PAGE: true,
  IS_MY_LIST: false,
  IS_SIGN_IN: true,
  IS_NAVIGATION: false,
  IS_USER_BLOCK: false
};

const LoginPage = () => {
  return (
    <div className="user-page">
      <Header
        isUserPage = {headerSettings.IS_USER_PAGE}
        isMyList = {headerSettings.IS_MY_LIST}
        isSignIn = {headerSettings.IS_SIGN_IN}
        isNavigation = {headerSettings.IS_NAVIGATION}
        isUserBlock = {headerSettings.IS_USER_BLOCK}
      />
      <SignIn/>
      <Footer/>
    </div>
  );
};

export default LoginPage;
