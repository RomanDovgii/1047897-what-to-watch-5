import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresListItem from "./genres-list-item";

configure({
  adapter: new Adapter()
});

const testGenre = `surreal`;

const mockEvent = {
  preventDefault() {}
};

it(
    `OnGenreClick function should be called only once`,
    () => {
      const onClick = jest.fn();

      const screen = shallow(
          <GenresListItem
            genre={testGenre}
            onGenreClick={onClick}
            isSelected={false}
          />
      );

      const link = screen.find(`a.catalog__genres-link`);

      link.simulate(`click`, mockEvent);

      expect(onClick).toHaveBeenCalledTimes(1);
    }
);

it(
    `OnGenreClick function shouldn't be called`,
    () => {
      const onClick = jest.fn();

      const screen = shallow(
          <GenresListItem
            genre={testGenre}
            onGenreClick={onClick}
            isSelected={true}
          />
      );

      const link = screen.find(`a.catalog__genres-link`);

      link.simulate(`click`, mockEvent);

      expect(onClick).toHaveBeenCalledTimes(0);
    }
);
