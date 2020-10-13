import React from "react";
import {Link} from "react-router-dom";
import {MAXIMUM_DISPLAYED_ACTORS} from "../../../utils/const";
import {movieType} from "../../types/types";
import Header from "../../header/header";

const HeaderSetting = {
  IS_USER_PAGE: true,
  IS_MY_LIST: false,
  IS_SIGN_IN: false,
  IS_NAVIGATION: false,
  IS_USER_BLOCK: true
};

const generateStarringString = (actors) => {
  let text = ``;
  let end = ``;
  let actorsLocal = actors.slice();

  if (actorsLocal.length > MAXIMUM_DISPLAYED_ACTORS) {
    actorsLocal = actors.slice(0, MAXIMUM_DISPLAYED_ACTORS);

    end = ` and other`;
  }

  actorsLocal.map((actor) => {
    text += (actor + `, `);
  });

  text = text.slice(0, -2);

  text += end;

  return text;
};

const generateRatingText = (rating) => {
  switch (true) {
    case rating <= 3:
      return `Bad`;
    case rating <= 5:
      return `Normal`;
    case rating <= 8:
      return `Good`;
    case rating < 10:
      return `Very good`;
    case rating === 10:
      return `Awesome`;
    default:
      return `Rating is incorrect`;
  }
};

const MovieCard = (props) => {
  const {movie} = props;

  const {name, genre, release, descriptionParagraphs, director, actors, rating, ratingsCount} = movie;

  const ratingString = `${rating}`.replace(`.`, `,`);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          isUserPage = {HeaderSetting.IS_USER_PAGE}
          isMyList = {HeaderSetting.IS_MY_LIST}
          isSignIn = {HeaderSetting.IS_SIGN_IN}
          isNavigation = {HeaderSetting.IS_NAVIGATION}
          isUserBlock = {HeaderSetting.IS_USER_BLOCK}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{release}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{ratingString}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{generateRatingText(rating)}</span>
                <span className="movie-rating__count">{ratingsCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              {descriptionParagraphs.map((paragraph, i) => (
                <p key={`paragraph-${i}`}>{paragraph}</p>
              ))}

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {generateStarringString(actors)}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = movieType;

export default MovieCard;
