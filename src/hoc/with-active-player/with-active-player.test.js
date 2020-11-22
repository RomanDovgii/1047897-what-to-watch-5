import React from "react";
import renderer from "react-test-renderer";
import {testChildrenType} from "../../components/types/types";
import {noop} from "../../utils/utils";
import withActivePlayer from "./with-active-player";

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

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = testChildrenType;

const MockComponentWrapped = withActivePlayer(MockComponent);

it(
    `Should render correct children`,
    () => {
      const tree = renderer
      .create(
          (<MockComponentWrapped
            movie = {testMovie}
            renderPlayer = {noop}
          >
            <React.Fragment/>
          </MockComponentWrapped>),
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
