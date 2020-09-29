import React from "react";
import PropTypes from "prop-types";
import GenresList from "./genres-list";
import MoviesList from "./movies-list";
import MoreButton from "./more-button";

const Catalog = (props) => {
  const {genres, movies} = props;

  return (
    <React.Fragment>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList
          genres = {genres}
        />
        <MoviesList
          movies = {movies}
        />
        <MoreButton/>
      </section>
    </React.Fragment>
  );
};

Catalog.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired
};

export default Catalog;
