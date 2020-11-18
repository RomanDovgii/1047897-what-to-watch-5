import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./app";

it(
    `Should render correct catalog`,
    () => {
      const renderer = new ShallowRenderer();

      const tree = renderer
      .render(
          <App/>
      );

      expect(tree).toMatchSnapshot();
    }
);
