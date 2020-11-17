import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import GenresListItem from "./genres-list-item";

const testGenre = `surreal`;

it(
    `Should render correct non-selected genre item`,
    () => {
      const tree = renderer
      .create(
          <GenresListItem
            genre={testGenre}
            onGenreClick={noop}
            isSelected={false}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct selected genre item`,
    () => {
      const tree = renderer
      .create(
          <GenresListItem
            genre={testGenre}
            onGenreClick={noop}
            isSelected={true}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
