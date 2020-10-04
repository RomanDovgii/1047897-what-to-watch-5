import React from "react";
import {headerType} from "../types/types";
import Logo from "./modules/logo";
import HeadingMyList from "./modules/heading-my-list";
import HeadingSignIn from "./modules/heading-sign-in";
import Navigation from "./modules/navigation";
import UserBlock from "./modules/user-block";

const Header = (props) => {
  const {isUserPage, isMyList, isSignIn, isNavigation, isUserBlock} = props;

  const userPageElementClass = isUserPage ? `user-page__head` : ``;

  return (
    <header className={`page-header ` + userPageElementClass}>
      <Logo/>

      <HeadingMyList
        isRendered = {isMyList}
      />
      <HeadingSignIn
        isRendered = {isSignIn}
      />

      <Navigation
        isRendered = {isNavigation}
      />

      <UserBlock
        isRendered = {isUserBlock}
      />
    </header>
  );
};

Header.propTypes = headerType;

export default Header;
