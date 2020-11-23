import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import {MainPageMovieCard} from "./main-page-movie-card";

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

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onPlayButtonClick and onMyListClick should be called once`,
    () => {
      const onPlayButtonClick = jest.fn();
      const onMyListClick = jest.fn();

      const movieCard = shallow(
          <MainPageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonClick={onPlayButtonClick}
            movie={testMovie}
            onMyListClick={onMyListClick}
            onMyListClickNonAuth={noop}
            isAuth
          />
      );

      const myListLink = movieCard.find(`.btn--list`);
      const playButtonLink = movieCard.find(`.btn--play`);

      myListLink.simulate(`click`, mockEvent);
      playButtonLink.simulate(`click`, mockEvent);

      expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
      expect(onMyListClick).toHaveBeenCalledTimes(1);
    }
);

it(
    `onPlayButtonClick and onMyListClickNonAuth should be called once`,
    () => {
      const onMyListClickNonAuth = jest.fn();

      const movieCard = shallow(
          <MainPageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonClick={noop}
            movie={testMovie}
            onMyListClick={noop}
            isAuth={false}
            onMyListClickNonAuth={onMyListClickNonAuth}
          />
      );

      const myListLink = movieCard.find(`.btn--list`);

      myListLink.simulate(`click`, mockEvent);

      expect(onMyListClickNonAuth).toHaveBeenCalledTimes(1);
    }
);
