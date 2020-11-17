import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Footer} from "./footer";

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `Click on link should call redirect function once`,
    () => {
      const onWTWLogoClick = jest.fn();

      const screen = shallow(
          <Footer
            onWTWLogoClick={onWTWLogoClick}
          />
      );

      const link = screen.find(`a.logo__link`);

      link.simulate(`click`, mockEvent);

      expect(onWTWLogoClick).toHaveBeenCalledTimes(1);
    }
);
