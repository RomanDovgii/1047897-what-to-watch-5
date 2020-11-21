import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Error} from "./error";

const testError = {
  code: `Unknown`,
  text: `He, he, he, try to catch me`
};

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onCloseButtonClick should be called once`,
    () => {
      const onCloseButtonClick = jest.fn();

      const screen = shallow(
          <Error
            error={testError}
            isError={true}
            onCloseButtonClick={onCloseButtonClick}
          />
      );

      const link = screen.find(`button.error__close`);

      link.simulate(`click`, mockEvent);

      expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
    }
);
