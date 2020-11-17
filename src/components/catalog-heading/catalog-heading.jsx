import React from "react";
import {CatalogHeadingVariant} from "../../utils/const";
import {headingType} from "../types/types";

const CatalogHeading = (props) => {
  const {heading} = props;

  const visuallyHidden = (heading === CatalogHeadingVariant.CATALOG) ? `visually-hidden` : ``;

  return (
    <h2 className={`catalog__title ${visuallyHidden}`}>{heading}</h2>
  );
};

CatalogHeading.propTypes = headingType;

export default CatalogHeading;
