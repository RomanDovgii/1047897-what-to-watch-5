import React from "react";
import {listItemType} from "../../types/types";

const MoviesListItem = (props) => {
  const {movie} = props;
  const {name} = movie;

  const imageName = name.split(` `).join(`-`);

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/` + imageName + `.jpg`} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>

  );
};

MoviesListItem.propTypes = listItemType;

export default MoviesListItem;
