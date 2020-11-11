import React from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";
import {CallSource} from "../../utils/const";
import {connect} from "react-redux";
import {selectMovie} from "../../store/actions/action";
import {fetchSelectedMovieComments} from "../../store/actions/api-actions";

const SmallMovieCard = (props) => {
  const {movie, renderPlayer, isPlaying, onClick, onMouseEnter, onMouseLeave} = props;
  const {name, previewVideoLink, previewImage, id} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
      onClick = {(evt) => {
        evt.preventDefault();

        onClick(movie);
      }}>
      <div className="small-movie-card__image">
        {renderPlayer(previewVideoLink, previewImage, CallSource.CATALOG, isPlaying)}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = smallMovieCardType;

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(selectMovie(movie));
    dispatch(fetchSelectedMovieComments(movie.id));
  }
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
