import React from "react";
import Header from "./../header/header";
import SignIn from "./modules/sign-in";
import Footer from "../footer/footer";
import {onWTWLogoClickType} from "../types/types";
import {HeaderHeadingVariant} from "../../utils/const";

const HeaderSetting = {
  IS_USER_PAGE: true,
};

const LoginPage = (props) => {
  const {onWTWLogoClick} = props;

  return (
    <div className="user-page">
      <Header
        isUserPage = {HeaderSetting.IS_USER_PAGE}
        heading={HeaderHeadingVariant.SIGN_IN}
        onWTWLogoClick = {onWTWLogoClick}
      />
      <SignIn/>
      <Footer/>
    </div>
  );
};

LoginPage.propTypes = onWTWLogoClickType;

export default LoginPage;
