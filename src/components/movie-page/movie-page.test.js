import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {noop} from "../../utils/utils";
import {MoviePage} from "./movie-page";

jest.requireActual(`react-router-dom`);
jest.mock(`react-router-dom`, () => ({
  useParams: jest.fn().mockReturnValue({id: 1}),
}));

const testComment = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};
const testComments = [
  testComment,
  testComment,
  testComment,
  testComment
];
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

it(
    `Should render correct MoviePage with authorized user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            fetchMovie={noop}
            onMyListClick={noop}
            selectedMovie={testMovie}
            movies={testMovies}
            comments={testComments}
            isAuth={true}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePage with non-authorized user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePage
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            fetchMovie={noop}
            onMyListClick={noop}
            selectedMovie={testMovie}
            movies={testMovies}
            comments={testComments}
            isAuth={false}
          />
      );

      expect(tree).toMatchSnapshot();
    }
);
