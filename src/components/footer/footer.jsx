import React from "react";
import {connect} from "react-redux";
import {redirectToRoute, resetShownMovies, flushSelectedMovie} from "../../store/actions/action";
import {AppRoute} from "../../utils/const";
import {onWTWLogoClickType} from "../types/types";

const Footer = (props) => {

  const {onWTWLogoClick} = props;

  return (
    <footer className="page-footer">
      <div className="logo">
        <a
          href=""
          className="logo__link logo__link--light"
          onClick={onWTWLogoClick}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = onWTWLogoClickType;

const mapDispatchToProps = (dispatch) => ({
  onWTWLogoClick() {
    dispatch(redirectToRoute(AppRoute.MAIN));
    dispatch(resetShownMovies());
    dispatch(flushSelectedMovie());
  }
});

export {Footer};
export default connect(null, mapDispatchToProps)(Footer);
