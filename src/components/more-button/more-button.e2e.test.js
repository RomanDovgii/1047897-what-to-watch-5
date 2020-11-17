import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoreButton from "./more-button";
import {CatalogHeadingVariant} from "../../utils/const";

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

const testMoviesCount = 10;

it(
    `Click on button should call function only once`,
    () => {
      const onClick = jest.fn();

      const screen = shallow(
          <MoreButton
            heading={CatalogHeadingVariant.CATALOG}
            moviesCount={testMoviesCount}
            onMoreButtonClick={onClick}
          />
      );

      const button = screen.find(`button.catalog__button`);

      button.simulate(`click`, mockEvent);

      expect(onClick).toHaveBeenCalledTimes(1);
    }
);
