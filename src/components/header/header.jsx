import React from "react";
import {headerType} from "../types/types";
import Logo from "./modules/logo";
import HeaderHeading from "../header-heading/header-heading";
import Navigation from "./modules/navigation";
import UserBlock from "./modules/user-block";
import {connect} from "react-redux";
import {resetShownMovies, changeGenre} from "../../store/actions/action";
import {HeaderHeadingVariant} from "../../utils/const";

const Header = (props) => {
  const {onUserIconClick, onWTWLogoClick, resetState, heading = ``, isNavigation = false, authorizationStatus} = props;
  const userPageElementClass = heading !== `` ? `user-page__head` : ``;

  return (
    <header className={`page-header ` + userPageElementClass}>
      <Logo
        onWTWLogoClick = {onWTWLogoClick}
        resetState = {resetState}
      />

      <HeaderHeading
        heading={heading}
      />

      <Navigation
        isRendered = {isNavigation}
      />

      {!(heading === HeaderHeadingVariant.SIGN_IN)
        ? <UserBlock
          onUserIconClick = {onUserIconClick}
          resetState = {resetState}
          isRendered = {authorizationStatus}
        />
        : ``
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
