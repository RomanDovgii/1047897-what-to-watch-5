import React from "react";
import {optionalType} from "../../types/types";

const HeadingMyList = (props) => {
  const {isRendered} = props;

  if (isRendered) {
    return (
      <h1 className="page-title user-page__title">My list</h1>
    );
  }

  return null;
};

HeadingMyList.propTypes = optionalType;

export default HeadingMyList;
