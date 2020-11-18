import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {noop} from "../../utils/utils";
import {SmallMovieCard} from "./small-movie-card";

configure({
  adapter: new Adapter()
});

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

const mockEvent = {
  preventDefault() {}
};

it(
    `Click on link should pass url to the movie`,
    () => {
      const onClick = jest.fn();

      const smallMovieCard = shallow(
          <SmallMovieCard
            movie={testMovie}
            renderPlayer={noop}
            isPlaying={false}
            onClick={onClick}
            onMouseEnter={noop}
            onMouseLeave={noop}
          />
      );

      const link = smallMovieCard.find(`a.small-movie-card__link`);

      link.simulate(`click`, mockEvent);

      expect(onClick).toHaveBeenCalledTimes(1);
    }
);

it(
    `When coursor enters onMouseEnter should be called`,
    () => {
      const onMouseEnter = jest.fn();

      const screen = shallow(
          <SmallMovieCard
            movie={testMovie}
            renderPlayer={noop}
            isPlaying={false}
            onClick={noop}
            onMouseEnter={onMouseEnter}
            onMouseLeave={noop}
          />
      );

      const article = screen.find(`article.small-movie-card`);

      article.simulate(`mouseEnter`);

      expect(onMouseEnter).toHaveBeenCalledTimes(1);
    }
);

it(
    `When coursor leaves article onMouseLeave should be called`,
    () => {
      const onMouseLeave = jest.fn();

      const screen = shallow(
          <SmallMovieCard
            movie={testMovie}
            renderPlayer={noop}
            isPlaying={false}
            onClick={noop}
            onMouseEnter={noop}
            onMouseLeave={onMouseLeave}
          />
      );

      const article = screen.find(`article.small-movie-card`);

      article.simulate(`mouseEnter`);
      article.simulate(`mouseLeave`);

      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    }
);
