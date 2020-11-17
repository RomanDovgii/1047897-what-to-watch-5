import React from "react";
import renderer from "react-test-renderer";
import {Footer} from "./footer";
import {noop} from "../../utils/utils";

it(
    `Should render correct footer`,
    () => {
      const tree = renderer
      .create(
          <Footer
            onWTWLogoClick={noop}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
