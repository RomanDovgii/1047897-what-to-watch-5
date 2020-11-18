import React from "react";
import renderer from "react-test-renderer";
import HeaderLogo from "./header-logo";
import {noop} from "../../utils/utils";

it(
    `Should render correct HeaderLogo`,
    () => {
      const tree = renderer
      .create(
          <HeaderLogo
            onWTWLogoClick={noop}
            resetState={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
