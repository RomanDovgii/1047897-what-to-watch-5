import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {HeaderUserBlock} from "./header-user-block";

configure({
  adapter: new Adapter()
});

it(
    `onUserIconClick and resetState should be called once per click, so they should be called twice in this test`,
    () => {
      const onUserIconClick = jest.fn();
      const resetState = jest.fn();

      const screen = mount(
          <HeaderUserBlock
            onUserIconClick={onUserIconClick}
            resetState={resetState}
            isRendered={false}
            avatarUrl={``}
          />
      );

      const userBlock = screen.find(`div.user-block`).at(0);
      const secondUserBlock = screen.find(`div.user-block`).at(1);

      userBlock.simulate(`click`);
      secondUserBlock.simulate(`click`);

      expect(onUserIconClick).toHaveBeenCalledTimes(2);
      expect(resetState).toHaveBeenCalledTimes(2);
    }
);
