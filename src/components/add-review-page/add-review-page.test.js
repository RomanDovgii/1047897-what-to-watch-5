import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {noop} from "../../utils/utils";
import {AddReviewPage} from "./add-review-page";

jest.mock(`react-router-dom`, () => ({
  useParams: jest.fn().mockReturnValue({environment: `dev`, service: `fakeService`}),
}));

const testMovie = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

it(
    `Should render correct AddReviewPage with loading`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <AddReviewPage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onLoadCompletion={noop}
            fetchMovie={noop}
            selectedMovie={{}}
            isLoading={true}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct AddReviewPage without loading`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <AddReviewPage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onLoadCompletion={noop}
            fetchMovie={noop}
            selectedMovie={testMovie}
            isLoading={false}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
