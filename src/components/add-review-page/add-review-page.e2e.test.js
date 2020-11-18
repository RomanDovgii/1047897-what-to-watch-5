import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import {AddReviewPage} from "./add-review-page";

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

const testMatch = {
  params: {
    id: testMovie.id
  }
};

configure({
  adapter: new Adapter()
});

it(
    `fetchMovie should be called once`,
    () => {
      const fetchMovie = jest.fn();

      shallow(
          <AddReviewPage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onLoadCompletion={noop}
            fetchMovie={fetchMovie}
            match={testMatch}
            selectedMovie={testMovie}
            isLoading={true}
          />
      );

      expect(fetchMovie).toHaveBeenCalledTimes(1);
    }
);