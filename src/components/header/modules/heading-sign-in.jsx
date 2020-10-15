import React from "react";
import {isRenderedType} from "../../types/types";

const HeadingSignIn = (props) => {
  const {isRendered} = props;

  if (isRendered) {
    return (
      <h1 className="page-title user-page__title">Sign in</h1>
    );
  }

  return null;
};

HeadingSignIn.propTypes = isRenderedType;

export default HeadingSignIn;
