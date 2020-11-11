import React from "react";
import {connect} from "react-redux";
import {movieCardTopType} from "../../types/types";
import Header from "../../header/header";
import {addMovieToFavorite} from "../../../store/actions/api-actions";

const HeaderSetting = {
  IS_USER_PAGE: false,
  IS_MY_LIST: false,
  IS_SIGN_IN: false,
  IS_NAVIGATION: false
};

const MovieCardTop = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, movie, onMyListClick} = props;
  const {name, genre, released, posterImage, backgroundImage, id, isFavorite} = movie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        onUserIconClick = {onUserIconClick}
        onWTWLogoClick = {onWTWLogoClick}
        isUserPage = {HeaderSetting.IS_USER_PAGE}
        isMyList = {HeaderSetting.IS_MY_LIST}
        isSignIn = {HeaderSetting.IS_SIGN_IN}
        isNavigation = {HeaderSetting.IS_NAVIGATION}
        isUserBlock = {HeaderSetting.IS_USER_BLOCK}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick = {(evt) => {
                  evt.preventDefault();

                  onPlayButtonClick(`/player/${id}`);
                }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick={(evt) => {
                  evt.preventDefault();
                  onMyListClick(id, isFavorite);
                }}
              >
                {isFavorite
                  ? <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  : <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                }
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCardTop.propTypes = movieCardTopType;

const mapDispatchToProps = (dispatch) => ({
  onMyListClick(id, status) {
    dispatch(addMovieToFavorite(id, status));
  }
});

const mapStateToProps = ({DATA}) => ({
  movie: DATA.promotedMovie
});

export {MovieCardTop};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardTop);
