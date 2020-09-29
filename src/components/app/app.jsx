import React from "react";
import MainPage from "../main-page/main-page";
import {appType} from "../types/index";

const App = (props) => {
  const {name, genre, releaseDate, genres, movies} = props;

  return (
    <MainPage
      name={name}
      genre={genre}
      releaseDate={releaseDate}
      genres={genres}
      movies={movies}
    />
  );
};

App.propTypes = appType.isRequired;

export default App;
