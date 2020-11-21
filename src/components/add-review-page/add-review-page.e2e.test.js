import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import {AddReviewPage} from "./add-review-page";

jest.mock(`react-router-dom`, () => ({
  useParams: jest.fn().mockReturnValue({environment: `dev`, service: `fakeService`}),
}));

configure({
  adapter: new Adapter()
});

it(
    `fetchMovie should be called once`,
    () => {
      const fetchMovie = jest.fn();
      mount(
          <AddReviewPage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onLoadCompletion={noop}
            fetchMovie={fetchMovie}
            selectedMovie={{}}
            isLoading={true}
          />
      );

      expect(fetchMovie).toHaveBeenCalledTimes(1);
    }
);
