import React from "react";
import {CatalogHeadingVariant} from "../../../utils/const";
import {moreButtonType} from "../../types/types";

const MoreButton = (props) => {
  const {heading, movies} = props;

  const moviesLength = movies.length;

  if ((moviesLength > 8) && (heading === CatalogHeadingVariant.CATALOG)) {
    return (
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    );
  }

  return null;
};

MoreButton.propTypes = moreButtonType;

export default MoreButton;
