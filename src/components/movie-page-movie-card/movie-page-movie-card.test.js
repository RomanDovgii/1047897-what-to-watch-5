import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {noop} from "../../utils/utils";
import {MovieScreenTab} from "../../utils/const";
import MoviePageMovieCard from "./movie-page-movie-card";

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

it(
    `Should render correct MoviePageMovieCard with authorized user, loading page, and overview tab`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.OVERVIEW}
            isAuth={true}
            isLoadinhg={true}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with authorized user, and overview tab but without loading`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.OVERVIEW}
            isAuth={true}
            isLoadinhg={false}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with overview tab but without loading and authorized user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.OVERVIEW}
            isAuth={false}
            isLoadinhg={false}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with authorized user, loading page, and reviews tab`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.REVIEWS}
            isAuth={true}
            isLoadinhg={true}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with authorized user, and reviews tab but without loading`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.REVIEWS}
            isAuth={true}
            isLoadinhg={false}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with reviews tab but without loading and authorized user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.REVIEWS}
            isAuth={false}
            isLoadinhg={false}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with authorized user, loading page, and details tab`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.DETAILS}
            isAuth={true}
            isLoadinhg={true}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with authorized user, and details tab but without loading`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.DETAILS}
            isAuth={true}
            isLoadinhg={false}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct MoviePageMovieCard with details tab but without loading and authorized user`,
    () => {
      const renderer = new ShallowRenderer();
      const tree = renderer
      .render(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={noop}
            onTabClick={noop}
            onMyListClick={noop}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.DETAILS}
            isAuth={false}
            isLoadinhg={false}
            selectedMovie={testMovie}
            comments={testComments}

          />
      );

      expect(tree).toMatchSnapshot();
    }
);
