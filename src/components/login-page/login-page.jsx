import React from "react";
import Header from "./../header/header";
import LoginPageForm from "../login-page-form/login-page-form";
import Footer from "../footer/footer";
import {onWTWLogoClickType} from "../types/types";
import {HeaderHeadingVariant} from "../../utils/const";
import Error from "../error/error";

const LoginPage = (props) => {
  const {onWTWLogoClick} = props;

  return (
    <div className="user-page">
      <Header
        isUserPage = {true}
        heading={HeaderHeadingVariant.SIGN_IN}
        onWTWLogoClick = {onWTWLogoClick}
      />
      <LoginPageForm/>
      <Footer/>
      <Error/>
    </div>
  );
};

LoginPage.propTypes = onWTWLogoClickType;

export default LoginPage;
