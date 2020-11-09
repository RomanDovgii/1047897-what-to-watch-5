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
  const {onUserIconClick, onWTWLogoClick, resetState, isUserPage, isMyList, isSignIn, isNavigation, authorizationStatus} = props;

  const userPageElementClass = isUserPage || isMyList ? `user-page__head` : ``;

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

      {
        !isUserPage
          ? <UserBlock
            onUserIconClick = {onUserIconClick}
            resetState = {resetState}
            isRendered = {authorizationStatus}
            isSignIn = {isSignIn}
          />
          : null
      }


    </header>
  );
};

Header.propTypes = headerType;

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  resetState(selectedGenre) {
    dispatch(resetShownMovies());
    dispatch(changeGenre(selectedGenre));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
