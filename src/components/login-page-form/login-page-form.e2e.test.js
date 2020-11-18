import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LoginPageForm} from "./login-page-form";

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onSubmit shoul be called once`,
    () => {
      const onSubmit = jest.fn();

      const screen = mount(
          <LoginPageForm
            onSubmit={onSubmit}
            isError={false}
          />
      );

      const link = screen.find(`form`);

      link.simulate(`submit`, mockEvent);

      expect(onSubmit).toHaveBeenCalledTimes(1);
    }
);
