import React from "react";
import renderer from "react-test-renderer";
import HeaderHeading from "./header-heading";
import {HeaderHeadingVariant} from "../../utils/const";

it(
    `Should render correct HeaderHeading with Sign in`,
    () => {
      const tree = renderer
      .create(
          <HeaderHeading
            heading={HeaderHeadingVariant.SIGN_IN}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct HeaderHeading with My list`,
    () => {
      const tree = renderer
      .create(
          <HeaderHeading
            heading={HeaderHeadingVariant.MY_LIST}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render nothing`,
    () => {
      const tree = renderer
      .create(
          <HeaderHeading/>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
