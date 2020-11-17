import React from "react";
import renderer from "react-test-renderer";
import LoadingPage from "./loading-page";

it(
    `Should render correct LoadingPage`,
    () => {
      const tree = renderer
      .create(
          <LoadingPage/>
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
