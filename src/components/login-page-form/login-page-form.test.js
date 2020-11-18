import React from "react";
import renderer from "react-test-renderer";
import {LoginPageForm} from "./login-page-form";

it(
    `Should render correct LoginPageForm without error`,
    () => {
      const tree = renderer
      .create(
          <LoginPageForm
            isError={false}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct LoginPageForm with error`,
    () => {
      const tree = renderer
      .create(
          <LoginPageForm
            isError={true}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
