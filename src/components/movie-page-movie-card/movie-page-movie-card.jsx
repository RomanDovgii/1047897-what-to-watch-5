import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {MovieScreenTab} from "../../utils/const";
import Header from "../header/header";
import Tabs from "../tabs/tabs";
import {movieCardType} from "../types/types";

const MoviePageMovieCard = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, selectedMovie, comments, onTabClick, shownScreen, isAuth, onMyListClick, isLoading, fetchMovie, onLoadCompletion, id} = props;

  const {name, genre, released, backgroundImage, posterImage, backgroundColor, isFavorite} = selectedMovie;

  useEffect(() => {
    if (JSON.stringify(selectedMovie) === JSON.stringify({})) {
      fetchMovie(id);
    }

    if (JSON.stringify(selectedMovie) !== JSON.stringify({})) {
      onLoadCompletion();
    }
  }, [selectedMovie]);

  return (
    <section className="movie-card movie-card--full" style={{background: `${backgroundColor}`}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          onUserIconClick = {onUserIconClick}
          onWTWLogoClick = {onWTWLogoClick}
        />

        <div className="movie-card__wrap">
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
                }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
                onClick = {(evt) => {
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
              {isAuth
                ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                : null
              }
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                {
                  Object.entries(MovieScreenTab).map((element) => {
                    const [key, value] = element;

                    return (
                      <li key={key} className={`movie-nav__item ${shownScreen === value ? `movie-nav__item--active` : ``}`}>
                        <a
                          href="#"
                          className="movie-nav__link"
                          onClick={(evt) => {
                            evt.preventDefault();
                            onTabClick(value);
                          }}>{value}</a>
                      </li>
                    );
                  })
                }
              </ul>
            </nav>

            {!isLoading
              ? <Tabs
                screen = {shownScreen}
                movie = {selectedMovie}
                comments = {comments}
              />
              : null
            }
          </div>
        </div>
      </div>
    </section>
  );
};


MoviePageMovieCard.propTypes = movieCardType;

export default MoviePageMovieCard;
