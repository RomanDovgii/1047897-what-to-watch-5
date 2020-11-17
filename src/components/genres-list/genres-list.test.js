import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import {GenresList} from "./genres-list";

const testSelectedGenre = `surreal`;
const testGenres = [
  `surreal`,
  `western`,
  `romance`
];

it(
    `Should render correct genres list`,
    () => {
      const tree = renderer
      .create(
          <GenresList
            genres={testGenres}
            selectedGenre={testSelectedGenre}
            onGenreClick={noop}
          >
            <React.Fragment/>
          </GenresList>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
