import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {noop} from "../../utils/utils";
import LoginPage from "./login-page";

it(
    `Should render correct `,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <LoginPage
            onWTWLogoClick={noop}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
