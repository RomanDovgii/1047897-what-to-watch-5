import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import MoviePageMovieCard from "./movie-page-movie-card";
import {MovieScreenTab} from "../../utils/const";

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

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
};

it(
    `onPlayButtonCLick, onTabClick, and onMyListClick should be called once per click`,
    () => {
      const onPlayButtonCLick = jest.fn();
      const onTabClick = jest.fn();
      const onMyListClick = jest.fn();

      const screen = shallow(
          <MoviePageMovieCard
            onUserIconClick={noop}
            onWTWLogoClick={noop}
            onPlayButtonCLick={onPlayButtonCLick}
            onTabClick={onTabClick}
            onMyListClick={onMyListClick}
            onLoadCompletion={noop}
            shownScreen={MovieScreenTab.OVERVIEW}
            isAuth={true}
            isLoadinhg={true}
            selectedMovie={testMovie}
            comments={testComments}
          />
      );

      const playButton = screen.find(`button.btn--play`);
      const myListButton = screen.find(`button.btn--list`);
      const firstTabLink = screen.find(`a.movie-nav__link`).at(0);
      const secondTabLink = screen.find(`a.movie-nav__link`).at(1);
      const thirdTabLink = screen.find(`a.movie-nav__link`).at(2);

      playButton.simulate(`click`, mockEvent);
      myListButton.simulate(`click`, mockEvent);
      firstTabLink.simulate(`click`, mockEvent);
      secondTabLink.simulate(`click`, mockEvent);
      thirdTabLink.simulate(`click`, mockEvent);

      expect(onPlayButtonCLick).toHaveBeenCalledTimes(1);
      expect(onMyListClick).toHaveBeenCalledTimes(1);
      expect(onTabClick).toHaveBeenCalledTimes(3);
    }
);
