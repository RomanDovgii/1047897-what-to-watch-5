import React from "react";
import PropTypes from "prop-types";

const MoviesListItem = (props) => {
  const {movie} = props;

  const imageName = movie.split(` `).join(`-`);

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/` + imageName + `.jpg`} alt={movie} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie}</a>
      </h3>
    </article>

  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.string.isRequired
};

export default MoviesListItem;
