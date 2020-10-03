import React from "react";
import Header from "./modules/header";
import SignIn from "./modules/sign-in";
import Footer from "./modules/footer";

const LoginPage = () => {
  return (
    <div className="user-page">
      <Header/>
      <SignIn/>
      <Footer/>
    </div>
  );
};

export default LoginPage;
