import React from "react";
import renderer from "react-test-renderer";
import MoreButton from "./more-button";
import {CatalogHeadingVariant} from "../../utils/const";
import {noop} from "../../utils/utils";

const testMoviesCount = 10;
const testIncorrectMoviesCount = 5;

it(
    `Should render correct MoreButton`,
    () => {
      const tree = renderer
      .create(
          <MoreButton
            heading={CatalogHeadingVariant.CATALOG}
            moviesCount={testMoviesCount}
            onMoreButtonClick={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render nothing due to heading being incorrect`,
    () => {
      const tree = renderer
      .create(
          <MoreButton
            heading={CatalogHeadingVariant.MOVIE_PAGE}
            moviesCount={testMoviesCount}
            onMoreButtonClick={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render nothing due to movies count being too big`,
    () => {
      const tree = renderer
      .create(
          <MoreButton
            heading={CatalogHeadingVariant.CATALOG}
            moviesCount={testIncorrectMoviesCount}
            onMoreButtonClick={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
