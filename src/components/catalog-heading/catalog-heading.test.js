import React from "react";
import renderer from "react-test-renderer";
import CatalogHeading from "./catalog-heading";
import {CatalogHeadingVariant} from "../../utils/const";

it(
    `Should render correct catalog heading variant with CatalogHeadingVariant.CATALOG`,
    () => {
      const tree = renderer
      .create(
          <CatalogHeading
            heading={CatalogHeadingVariant.CATALOG}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct catalog heading variant with CatalogHeadingVariant.MOVIE_PAGE`,
    () => {
      const tree = renderer
      .create(
          <CatalogHeading
            heading={CatalogHeadingVariant.MOVIE_PAGE}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
