import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {MovieScreenTab} from "../../../utils/const";
import Header from "../../header/header";
import Tabs from "../../tabs/tabs";
import {movieCardType} from "../../types/types";

const HeaderSetting = {
  IS_USER_PAGE: true,
  IS_MY_LIST: false,
  IS_SIGN_IN: false,
  IS_NAVIGATION: false,
  IS_USER_BLOCK: true
};

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shownScreen: MovieScreenTab.OVERVIEW
    };
  }

  render() {
    const {onUserIconClick, onPlayButtonClick, promotedMovie} = this.props;

    const {name, genre, release} = promotedMovie;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            onUserIconClick = {onUserIconClick}
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
                  onClick = {(evt) => {
                    evt.preventDefault();

                    onPlayButtonClick();
                  }}
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
                  <li className={`movie-nav__item ${this.state.shownScreen === MovieScreenTab.OVERVIEW ? `movie-nav__item--active` : ``}`}>
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        this.setState({
                          shownScreen: MovieScreenTab.OVERVIEW
                        });
                      }}>Overview</a>
                  </li>
                  <li className={`movie-nav__item ${this.state.shownScreen === MovieScreenTab.DETAILS ? `movie-nav__item--active` : ``}`}>
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        this.setState({
                          shownScreen: MovieScreenTab.DETAILS
                        });
                      }}>Details</a>
                  </li>
                  <li className={`movie-nav__item ${this.state.shownScreen === MovieScreenTab.REVIEWS ? `movie-nav__item--active` : ``}`}>
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        this.setState({
                          shownScreen: MovieScreenTab.REVIEWS
                        });
                      }}>Reviews</a>
                  </li>
                </ul>
              </nav>

              <Tabs
                screen = {this.state.shownScreen}
                movie = {promotedMovie}
              />

              {/* <div className="movie-rating">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = movieCardType;
