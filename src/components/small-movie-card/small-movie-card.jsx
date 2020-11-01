import React from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";
import {CallSource} from "../../utils/const";

const SmallMovieCard = (props) => {
  const {movie, renderPlayer, isPlaying, onMouseEnter, onMouseLeave} = props;
  const {name, videoUrl} = movie;

  const imageName = name.split(` `).join(`-`);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        {renderPlayer(videoUrl, imageName, CallSource.CATALOG, isPlaying)}
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
