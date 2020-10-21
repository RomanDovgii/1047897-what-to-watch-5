import React from "react";
import {MovieScreenTab, MAXIMUM_DISPLAYED_ACTORS, RatingSystem} from "../../utils/const";
import {tabsType} from "../types/types";

const generateStarringString = (actors) => {
  let text = ``;
  let end = ``;
  let actorsLocal = actors.slice();

  if (actorsLocal.length > MAXIMUM_DISPLAYED_ACTORS) {
    actorsLocal = actors.slice(0, MAXIMUM_DISPLAYED_ACTORS);

    end = ` and other`;
  }

  text = actorsLocal.join(`, `);

  text = text.slice(0, -2);

  text += end;

  return text;
};

const generateRatingText = (rating) => {
  switch (true) {
    case rating <= RatingSystem.BAD:
      return `Bad`;
    case rating <= RatingSystem.NORMAL:
      return `Normal`;
    case rating <= RatingSystem.GOOD:
      return `Good`;
    case rating < RatingSystem.AWESOME:
      return `Very good`;
    case rating === RatingSystem.AWESOME:
      return `Awesome`;
    default:
      return `Rating is incorrect`;
  }
};

const generateActorsText = (actors) => {
  const actorsMaxIndex = actors.length - 1;

  return (<span className="movie-card__details-value">
    {actors.map((actor, i) => (
      <React.Fragment key={i}>
        {actor}{i < actorsMaxIndex ? `, ` : ``} {i < actorsMaxIndex ? <br/> : ``}
      </React.Fragment>
    ))}
  </span>);
};

const generateDurationString = (duration) => {
  return `${Math.floor(duration / 60)}h ${duration % 60}m`;
};

const Tabs = (props) => {
  const {screen, movie} = props;

  const {genre, release, descriptionParagraphs, director, actors, rating, ratingsCount, duration} = movie;

  const ratingString = `${rating}`.replace(`.`, `,`);

  switch (screen) {
    case MovieScreenTab.OVERVIEW:
      return (
        <React.Fragment>
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
        </React.Fragment>
      );

    case MovieScreenTab.DETAILS:
      return (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              {generateActorsText(actors)}
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{generateDurationString(duration)}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{release}</span>
            </p>
          </div>
        </div>
      );

    case MovieScreenTab.REVIEWS:
      return (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.</p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                <footer className="review__details">
                  <cite className="review__author">Bill Goodykoontz</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.</p>

                <footer className="review__details">
                  <cite className="review__author">Amanda Greever</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>
          </div>
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                <footer className="review__details">
                  <cite className="review__author">Matthew Lickona</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,2</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,6</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,0</div>
            </div>
          </div>
        </div>
      );
  }

  return null;
};

Tabs.propTypes = tabsType; // update this later

export default Tabs;
