import React from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";
import {CallSource} from "../../utils/const";
import {connect} from "react-redux";
import {selectMovie} from "../../store/actions/action";

const SmallMovieCard = (props) => {
  const {movie, renderPlayer, isPlaying, onMouseEnter, onMouseLeave, onMouseIn, onMouseOut} = props;
  const {name, previewVideoLink, previewImage} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseIn(movie);
        onMouseEnter();
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        onMouseOut();
        onMouseLeave();
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
  onMouseIn(movie) {
    dispatch(selectMovie(movie));
  },
  onMouseOut() {
    dispatch(selectMovie({}));
  }
});

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
