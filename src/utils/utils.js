import {GENRES, MOVIES, VIDEO_URLS, MOVIES_COUNT} from "./const";

const getRandomElementFromArray = (array) => {
  const max = array.length;
  const randomNumber = Math.floor(Math.random() * max);

  return array[randomNumber];
};

// const generateDescription = () => {}

// const generate

const generateMovie = () => {
  return {
    name: getRandomElementFromArray(MOVIES),
    genre: getRandomElementFromArray(GENRES),
    release: new Date(),
    // description: ,
    // directors: ,
    // starring: ,
    // rating: ,
    // ratingsCount: ,
    videoUrl: getRandomElementFromArray(VIDEO_URLS)
  };
};

export const generateMovies = () => {
  const movies = [];

  for (let i = 0; i < MOVIES_COUNT; i++) {
    const movie = generateMovie();
    movies.push(movie);
  }

  return movies;
};
