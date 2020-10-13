import {GENRES, MOVIES, VIDEO_URLS, DIRECTORS, ACTORS, MOVIES_COUNT, MAXIMUM_RAITING, MAXIMUM_RAITING_COUNT, MINIMUM_STARRING, MAXIMUM_STARRING, MINIMUM_DESCRIPTION, MAXIMUM_DESCRIPTION, FISH_TEXT, GRAND_BUDAPEST_HOTEL} from "./const";

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
  return Math.round((Math.random() * MAXIMUM_RAITING) * 1e1) / 1e1;
};

const generateStarring = () => {
  const starring = [];

  const starringCount = getRandomIntegerNumber(MINIMUM_STARRING, MAXIMUM_STARRING);

  for (let i = 0; i < starringCount; i++) {
    starring.push(getRandomElementFromArray(ACTORS));
  }

  return starring;
};

const generateDescription = () => {
  let description = ``;

  const sentences = FISH_TEXT.split(`. `);
  const descriptionLength = getRandomIntegerNumber(MINIMUM_DESCRIPTION, MAXIMUM_DESCRIPTION);

  for (let i = 0; i < descriptionLength; i++) {
    description = description + getRandomElementFromArray(sentences) + `. `;
  }

  return description;
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
    description: generateDescription(),
    director: getRandomElementFromArray(DIRECTORS),
    starring: generateStarring(),
    rating: generateRating(),
    ratingsCount: getRandomIntegerNumber(MAXIMUM_RAITING_COUNT),
    videoUrl: getRandomElementFromArray(VIDEO_URLS),
    isMyList: getRandomBoolean()
  };
};

export const generateMovies = () => {
  let movies = [];

  for (let i = 0; i < MOVIES_COUNT; i++) {
    const movie = generateMovie();
    movies.push(movie);
  }

  movies = [GRAND_BUDAPEST_HOTEL, ...movies];

  return movies;
};
