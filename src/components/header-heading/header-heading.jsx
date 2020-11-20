import React from "react";
import {HeaderHeadingVariant} from "../../utils/const";
import {headingType} from "../types/types";

const HeaderHeading = (props) => {
  const {heading = ``} = props;

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

HeaderHeading.propTypes = headingType;

export default HeaderHeading;
