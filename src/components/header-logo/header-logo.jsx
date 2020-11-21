import React from "react";
import {logoType} from "../types/types";

const HeaderLogo = (props) => {
  const {onWTWLogoClick, resetState} = props;

  return (
    <div className="logo">
      <a
        className="logo__link"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();

          resetState();

          onWTWLogoClick();
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

HeaderLogo.propTypes = logoType;

export default HeaderLogo;
