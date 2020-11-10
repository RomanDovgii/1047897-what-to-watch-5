import {ACTORS, MAXIMUM_RATING, FISH_TEXT, Description, MAXIMUM_SIMIALAR_MOVIES, MAXIMUM_DISPLAYED_ACTORS, RatingSystem, ALL_GENRE} from "./const";

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

const generateRating = () => {
  return Math.round((Math.random() * MAXIMUM_RATING) * 1e1) / 1e1;
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

export const generateComment = () => {
  return {
    text: generateParagraphText(),
    rating: generateRating(),
    name: getRandomElementFromArray(ACTORS),
    date: new Date()
  };
};

export const filterMoviesForMyList = (movies) => {
  return movies.filter((movie) => movie.isMyList);
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
  const genresNotSorted = movies.map(({genre}) => genre);

  const genres = [];

  genresNotSorted.map((genre) => {
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });

  return [ALL_GENRE, ...genres];
};

export const adaptToClient = (movie) => {
  const adaptedMovie = Object.assign(
      {},
      {
        id: movie.id,
        name: movie.name,
        posterImage: movie.poster_image,
        previewImage: movie.preview_image,
        backgroundImage: movie.background_image,
        backgroundColor: movie.background_color,
        videoLink: movie.video_link,
        previewVideoLink: movie.preview_video_link,
        description: movie.description,
        rating: movie.rating,
        scoresCount: movie.scores_count,
        director: movie.director,
        starring: movie.starring,
        runTime: movie.run_time,
        genre: movie.genre,
        released: movie.released,
        isFavorite: movie.is_favorite
      }
  );

  return adaptedMovie;
};
