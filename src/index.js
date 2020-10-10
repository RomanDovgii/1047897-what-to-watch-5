import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {movies} from "./mocks/movies";

// console.log(movies);

const Settings = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
  GENRES: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`],
  MOVIES: [`Aviator`, `Bohemian Rhapsody`, `Dardjeeling Limited`, `Fantastic Beasts The Crimes of Grindelwald`, `Johnny English`, `Macbeth`, `Midnight Special`, `Mindhunter`, `Moonrise Kingdom`, `No Country For Old Men`, `Orlando`, `Pulp Fiction`, `Revenant`, `Seven Years In Tibet`, `Shutter Island`, `Snatch`, `War of the Worlds`, `We need to talk about Kevin`, `What We Do in the Shadows`]
};

ReactDOM.render(
    <App
      name = {Settings.NAME}
      genre = {Settings.GENRE}
      releaseDate = {Settings.RELEASE_DATE}
      genres = {Settings.GENRES}
      movies = {Settings.MOVIES}
    />,
    document.querySelector(`#root`)
);
