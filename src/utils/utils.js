import {GENRES, MOVIES, VIDEO_URLS, DIRECTORS, ACTORS, MOVIES_COUNT, MAXIMUM_RATING, MAXIMUM_RATING_COUNT, FISH_TEXT, ActorsCount, Description, Paragraph, Duration, Id, MAXIMUM_SIMIALAR_MOVIES} from "./const";

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

// const generateComment = () => {
//   return {
//     text: generateParagraphText(),
//     rating: generateRating(),
//     name: getRandomElementFromArray(ACTORS),
//     date: new Date()
//   };
// };

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
