import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../utils/utils";
import {PlayerPage} from "./player-page";

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

it(
    `Should render correct PlayerPage while it's loading`,
    () => {
      const tree = renderer
      .create(
          (<PlayerPage
            selectedMovie={testMovie}
            isPlaying={false}
            isPlayerLoading={true}
            currentTime={0}
            onTimeUpdate={noop}
            onLoadingEnd={noop}
            onExitButtonClick={noop}
            isLoading={true}
            onPlayButtonClick={noop}
            fetchMovie={noop}
            match={testMatch}
          />),
          {
            createNodeMock() {
              return {};
            }
          }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);

it(
    `Should render correct PlayerPage after loading`,
    () => {
      const tree = renderer
      .create(
          (<PlayerPage
            selectedMovie={testMovie}
            isPlaying={false}
            isPlayerLoading={false}
            currentTime={0}
            onTimeUpdate={noop}
            onLoadingEnd={noop}
            onExitButtonClick={noop}
            isLoading={false}
            onPlayButtonClick={noop}
            fetchMovie={noop}
            match={testMatch}
          />),
          {
            createNodeMock() {
              return {};
            }
          }
      )
      .toJSON();

      expect(tree).toMatchSnapshot();
    }
);
