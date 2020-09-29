import React from "react";
import {movieListItemType} from "../../types/index";

const MoviesListItem = (props) => {
  const movieListItem = props;

  const imageName = movieListItem.movie.split(` `).join(`-`);

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/` + imageName + `.jpg`} alt={movieListItem.movie} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movieListItem.movie}</a>
      </h3>
    </article>

  );
};

MoviesListItem.propTypes = {
  movieListItem: movieListItemType
};

export default MoviesListItem;
