import React from "react";
import {headerType} from "../types/types";
import Logo from "./modules/logo";
import HeadingMyList from "./modules/heading-my-list";
import HeadingSignIn from "./modules/heading-sign-in";
import Navigation from "./modules/navigation";
import UserBlock from "./modules/user-block";
import {connect} from "react-redux";
import {resetShownMovies, changeGenre} from "../../store/actions/action";

const Header = (props) => {
  const {onUserIconClick, onWTWLogoClick, resetState, isUserPage, isMyList, isSignIn, isNavigation, isUserBlock} = props;

  const userPageElementClass = isUserPage ? `user-page__head` : ``;

  return (
    <header className={`page-header ` + userPageElementClass}>
      <Logo
        onWTWLogoClick = {onWTWLogoClick}
        resetState = {resetState}
      />

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
        onUserIconClick = {onUserIconClick}
        resetState = {resetState}
        isRendered = {isUserBlock}
      />
    </header>
  );
};

Header.propTypes = headerType;

const mapDispatchToProps = (dispatch) => ({
  resetState(selectedGenre) {
    dispatch(resetShownMovies());
    dispatch(changeGenre(selectedGenre));
  }
});

export {Header};
export default connect(null, mapDispatchToProps)(Header);
