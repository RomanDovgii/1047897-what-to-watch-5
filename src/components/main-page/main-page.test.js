import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {noop} from "../../utils/utils";
import {MainPage} from "./main-page";

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

const testMovies = [
  testMovie,
  testMovie,
  testMovie,
  testMovie,
  testMovie
];

const testGenres = [
  `surral`,
  `anime`,
  `fantasy`,
  `sci-fi`,
  `western`
];

it(
    `Should render correct MainPage`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MainPage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            movies={testMovies}
            genres={testGenres}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
