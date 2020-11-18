import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerPageExit from "./player-page-exit";

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onExitButtonClick should be called once`,
    () => {
      const onExitButtonClick = jest.fn();

      const screen = shallow(
          <PlayerPageExit
            onExitButtonClick={onExitButtonClick}
          />
      );

      const link = screen.find(`button.player__exit`);

      link.simulate(`click`, mockEvent);

      expect(onExitButtonClick).toHaveBeenCalledTimes(1);
    }
);
