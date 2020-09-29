import React from "react";
import PropTypes from "prop-types";
import MovieCardTop from "./modules/movie-top";
import Catalog from "./modules/catalog";
import Footer from "./modules/footer";

const MainPage = (props) => {
  const {name, genre, releaseDate, genres, movies} = props;

  return (
    <React.Fragment>
      <MovieCardTop
        name = {name}
        genre = {genre}
        releaseDate = {releaseDate}
      />
      <div className="page-content">
        <Catalog
          genres = {genres}
          movies = {movies}
        />
        <Footer/>
      </div>
    </React.Fragment>

  );
};

MainPage.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired
};

export default MainPage;
