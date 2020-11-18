import React from "react";
import {HeaderHeadingVariant} from "../../utils/const";

const HeaderHeading = (props) => {
  const {heading} = props;

  switch (heading) {
    case HeaderHeadingVariant.MY_LIST:
      return (
        <h1 className="page-title user-page__title">My list</h1>
      );
    case HeaderHeadingVariant.SIGN_IN:
      return (
        <h1 className="page-title user-page__title">Sign in</h1>
      );
    default:
      return ``;
  }
};

HeaderHeading.propTypes = {};

export default HeaderHeading;
