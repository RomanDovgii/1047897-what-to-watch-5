import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeaderLogo from "./header-logo";

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onWTWLogoClick, resetState should be called once`,
    () => {
      const onWTWLogoClick = jest.fn();
      const resetState = jest.fn();

      const screen = shallow(
          <HeaderLogo
            onWTWLogoClick={onWTWLogoClick}
            resetState={resetState}
          />
      );

      const link = screen.find(`a.logo__link`);

      link.simulate(`click`, mockEvent);

      expect(onWTWLogoClick).toHaveBeenCalledTimes(1);
      expect(resetState).toHaveBeenCalledTimes(1);
    }
);
