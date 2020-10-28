import React from "react";
import {logoType} from "../../types/types";

const Logo = (props) => {
  const {onWTWLogoClick, resetState} = props;

  return (
    <div className="logo">
      <a
        className="logo__link"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();

          resetState(`All genres`);

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

Logo.propTypes = logoType;

export default Logo;
