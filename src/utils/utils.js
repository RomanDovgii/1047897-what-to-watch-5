import React from "react";
import {GENRES, MOVIES, VIDEO_URLS, DIRECTORS, ACTORS, MOVIES_COUNT, MAXIMUM_RATING, MAXIMUM_RATING_COUNT, FISH_TEXT, ActorsCount, Description, Paragraph, Duration, Id, CommentCount, MAXIMUM_SIMIALAR_MOVIES, MAXIMUM_DISPLAYED_ACTORS, RatingSystem, ALL_GENRE} from "./const";

const getRandomElementFromArray = (array) => {
  const max = array.length;
  const randomNumber = Math.floor(Math.random() * max);

  return array[randomNumber];
};

const getRandomIntegerNumber = (firstNumber, secondNumber = 0) => {
  const max = Math.max(firstNumber, secondNumber);
  const min = Math.min(firstNumber, secondNumber);

  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomBoolean = () => {
  return (Math.random() >= 0.5);
};

const generateRating = () => {
  return Math.round((Math.random() * MAXIMUM_RATING) * 1e1) / 1e1;
};

const generateActors = () => {
  const actors = [];

  const starringCount = getRandomIntegerNumber(ActorsCount.MINIMUM, ActorsCount.MAXIMUM);

  for (let i = 0; i < starringCount; i++) {
    actors.push(getRandomElementFromArray(ACTORS));
  }

  return actors;
};

const generateParagraphText = () => {
  const randomSentences = [];
  const sentences = FISH_TEXT.split(`. `);
  const descriptionLength = getRandomIntegerNumber(Description.MINIMUM, Description.MAXIMUM);

  for (let i = 0; i < descriptionLength; i++) {
    randomSentences.push(getRandomElementFromArray(sentences));
  }

  const text = randomSentences.join(`. `);

  return text;
};

const generateDescriptionParagraphs = () => {
  const paragraphsCount = getRandomIntegerNumber(Paragraph.MINIMUM, Paragraph.MAXIMUM);
  let paragraphs = [];

  for (let i = 0; i < paragraphsCount; i++) {
    paragraphs.push(generateParagraphText());
  }

  return paragraphs;
};

const generateRelease = () => {
  const date = new Date();

  return date.getFullYear();
};

const generateMovie = () => {
  return {
    name: getRandomElementFromArray(MOVIES),
    genre: getRandomElementFromArray(GENRES),
    release: generateRelease(),
    descriptionParagraphs: generateDescriptionParagraphs(),
    director: getRandomElementFromArray(DIRECTORS),
    actors: generateActors(),
    rating: generateRating(),
    ratingsCount: getRandomIntegerNumber(MAXIMUM_RATING_COUNT),
    videoUrl: getRandomElementFromArray(VIDEO_URLS),
    duration: getRandomIntegerNumber(Duration.MINIMUM, Duration.MAXIMUM),
    id: getRandomIntegerNumber(Id.MINIMUM, Id.MAXIMUM),
    isMyList: getRandomBoolean()
  };
};

export const generateComment = () => {
  return {
    text: generateParagraphText(),
    rating: generateRating(),
    name: getRandomElementFromArray(ACTORS),
    date: new Date()
  };
};

const generateComments = (count) => {
  return new Array(count).fill().map(generateComment);
};

export const generateCommentsById = (movieIds) => {
  const comments = movieIds.reduce((accumulator, id) => {
    const number = getRandomIntegerNumber(CommentCount.MINIMUM, CommentCount.MAXIMUM);
    accumulator[id] = generateComments(number);
    return accumulator;
  }, {});

  return comments;
};

export const filterMoviesForMyList = (movies) => {
  return movies.filter((movie) => movie.isMyList);
};

export const generateMovies = () => {
  return new Array(MOVIES_COUNT).fill().map(generateMovie);
};

export const generateVideoType = (url) => {
  const urlPieces = url.split(`.`);
  const lastIndex = urlPieces.length - 1;

  return `video/${urlPieces[lastIndex]}`;
};

export const filterMoviesByGenre = (movies, genre) => {
  const filteredMovies = movies.slice().filter((movie) => movie.genre === genre);

  let finalArray = filteredMovies;

  if (filteredMovies.length < MAXIMUM_SIMIALAR_MOVIES) {
    const difference = MAXIMUM_SIMIALAR_MOVIES - filterMoviesByGenre.length;
    const additionalMovies = movies.slice().filter((movie) => movie.genre !== genre).slice(difference);
    finalArray = filteredMovies.concat(additionalMovies);
  }

  return finalArray;
};

export const generateDurationString = (duration) => {
  return `${Math.floor(duration / 60)}h ${duration % 60}m`;
};

export const generateActorsText = (actors) => {
  const actorsMaxIndex = actors.length - 1;

  return (
    <span className="movie-card__details-value">
      {actors.map((actor, i) => (
        <React.Fragment key={i}>
          {actor}{i < actorsMaxIndex ? `, ` : ``} {i < actorsMaxIndex ? <br/> : ``}
        </React.Fragment>
      ))}
    </span>);
};

export const generateStarringString = (actors) => {
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

export const generateRatingText = (rating) => {
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

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const createGenresList = (movies) => {
  const genresNotSorted = [];

  movies.map((movie) => {
    genresNotSorted.push(movie.genre);
  });

  const genres = [];

  genresNotSorted.map((genre) => {
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });

  return [ALL_GENRE, ...genres];
};
