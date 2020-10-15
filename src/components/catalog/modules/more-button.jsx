import React from "react";
import {CatalogHeadingVariant} from "../../../utils/const";
import {moreButtonType} from "../../types/types";
import {MAXIMUM_DISPLAYED_MOVIES} from "../../../utils/const";

const MoreButton = (props) => {
  const {heading, movies} = props;

  const moviesLength = movies.length;

  if ((moviesLength > MAXIMUM_DISPLAYED_MOVIES) && (heading === CatalogHeadingVariant.CATALOG)) {
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
