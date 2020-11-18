import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import {LoginPageForm} from "./login-page-form";

it(
    `Should render correct LoginPageForm without error`,
    () => {
      const tree = renderer
      .create(
          <LoginPageForm
            onSubmit={noop}
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
            onSubmit={noop}
            isError={true}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
