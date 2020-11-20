import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {MovieScreenTab} from "../../utils/const";

const testComment = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Lorem ipsum dolor sit amet`,
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
    `Should render nothing`,
    () => {
      const tree = renderer
      .create(
          <Tabs
            movie={testMovie}
            comments={testComments}
            screen={``}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render Overview`,
    () => {
      const tree = renderer
      .create(
          <Tabs
            movie={testMovie}
            comments={testComments}
            screen={MovieScreenTab.OVERVIEW}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render Details`,
    () => {
      const tree = renderer
      .create(
          <Tabs
            movie={testMovie}
            comments={testComments}
            screen={MovieScreenTab.DETAILS}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render Reviews`,
    () => {
      const tree = renderer
      .create(
          <Tabs
            movie={testMovie}
            comments={testComments}
            screen={MovieScreenTab.REVIEWS}
          />
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
