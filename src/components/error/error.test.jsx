import React from "react";
import renderer from "react-test-renderer";
import {Error} from "./error";
import {noop} from "../../utils/utils";

const testError = {
  code: `Unknown`,
  text: `He, he, he, try to catch me`
};

it(
    `Should render correct error`,
    () => {
      const tree = renderer
      .create(
          <Error
            error={testError}
            isError={true}
            onCloseButtonClick={noop}
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
      <Error
        error={{}}
        isError={false}
        onCloseButtonClick={noop}
      />
  )
  .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render nothing even if error exist`,
    () => {
      const tree = renderer
    .create(
        <Error
          error={testError}
          isError={false}
          onCloseButtonClick={noop}
        />
    )
    .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `In case of back end developer being not smart enough to provide information with error status (error code 1D10T). It will render an error with basic text`,
    () => {
      const tree = renderer
    .create(
        <Error
          error={{}}
          isError={true}
          onCloseButtonClick={noop}
        />
    )
    .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
