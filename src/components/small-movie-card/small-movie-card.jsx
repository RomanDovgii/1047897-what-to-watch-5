import React from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";

const SmallMovieCard = (props) => {
  const {onMouseEnter, onMouseLeave, movie} = props;
  const {name} = movie;

  const imageName = name.split(` `).join(`-`);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseEnter(movie);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        onMouseLeave();
      }}>
      <div className="small-movie-card__image">
        <img src={`img/` + imageName + `.jpg`} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id">
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = smallMovieCardType;

export default SmallMovieCard;
