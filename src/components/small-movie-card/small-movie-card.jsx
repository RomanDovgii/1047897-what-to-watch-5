import React from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";
import {CallSource, AppRoute} from "../../utils/const";
import {connect} from "react-redux";
import {redirectToRoute, selectMovie} from "../../store/actions/action";

const SmallMovieCard = (props) => {
  const {movie, renderPlayer, isPlaying, onClick} = props;
  const {name, previewVideoLink, previewImage} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={(evt) => {
        evt.preventDefault();

        onClick(movie);
      }}>
      <div className="small-movie-card__image">
        {renderPlayer(previewVideoLink, previewImage, CallSource.CATALOG, isPlaying)}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to="/films/:id"
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
    dispatch(redirectToRoute(AppRoute.MOVIES));
  }
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
