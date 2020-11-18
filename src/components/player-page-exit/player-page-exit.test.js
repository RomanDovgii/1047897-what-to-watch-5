import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import PlayerPageExit from "./player-page-exit";

it(
    `Should render correct PlayerPageExit`,
    () => {
      const tree = renderer
      .create(
          <PlayerPageExit
            onExitButtonClick={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
