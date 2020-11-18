import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import {HeaderUserBlock} from "./header-user-block";

it(
    `Should render correct HeaderUserBlock with sign in`,
    () => {
      const tree = renderer
      .create(
          <HeaderUserBlock
            onUserIconClick={noop}
            resetState={noop}
            isRendered={false}
            avatarUrl={``}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct HeaderUserBlock`,
    () => {
      const tree = renderer
      .create(
          <HeaderUserBlock
            onUserIconClick={noop}
            resetState={noop}
            isRendered={true}
            avatarUrl={``}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
