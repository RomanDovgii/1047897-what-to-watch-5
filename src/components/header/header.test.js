import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {noop} from "../../utils/utils";
import {HeaderHeadingVariant} from "../../utils/const";
import {Header} from "./header";

it(
    `Should render correct Header without heading, navigation, and logged in user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <Header
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            resetState={noop}
            authorizationStatus={false}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Header  without navigation and logged in user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <Header
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            resetState={noop}
            heading={HeaderHeadingVariant.SIGN_IN}
            authorizationStatus={false}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Header  with logged in user and without navigation`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <Header
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            resetState={noop}
            heading={HeaderHeadingVariant.MY_LIST}
            authorizationStatus={true}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Header without heading and logged in user but with navigation`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <Header
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            resetState={noop}
            navigation={true}
            authorizationStatus={false}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Header  without logged in user but with navigation`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <Header
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            resetState={noop}
            navigation={true}
            heading={HeaderHeadingVariant.SIGN_IN}
            authorizationStatus={false}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct Header  with logged in user and navigation`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <Header
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            resetState={noop}
            navigation={true}
            heading={HeaderHeadingVariant.MY_LIST}
            authorizationStatus={true}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
