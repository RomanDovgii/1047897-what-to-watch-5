import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

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

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired
};

export default App;
