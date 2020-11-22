import React from "react";
import {smallMovieCardType} from "../types/types";
import {connect} from "react-redux";
import {selectMovie, redirectToRoute} from "../../store/actions/action";
import {fetchSelectedMovieComments} from "../../store/actions/api-actions";

const SmallMovieCard = (props) => {
  const {movie, isPlaying, onClick, onMouseEnter, onMouseLeave, children, renderPlayer} = props;
  const {name, previewImage} = movie;

  renderPlayer(isPlaying);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
      onClick = {(evt) => {
        evt.preventDefault();
        onClick(movie);
      }}
    >
      <div className="small-movie-card__image">
        <img className="player__video" src={previewImage} alt={name}/>
        <div className="player__video-wrapper" style={{position: `absolute`, top: `0`, right: `0`, bottom: `0`, left: `0`, width: `100%`, height: `100%`, zIndex: `50`}}>
          {children}
        </div>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="#"
        >
          {name}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = smallMovieCardType;

const mapDispatchToProps = (dispatch) => ({
  onClick(movie) {
    dispatch(selectMovie(movie));
    dispatch(fetchSelectedMovieComments(movie.id));
    dispatch(redirectToRoute(`/films/${movie.id}`));
  }
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
