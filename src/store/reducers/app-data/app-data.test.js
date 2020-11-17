import {appData} from "./app-data";
import {ActionType, ALL_GENRE} from "../../../utils/const";
import {createGenresList, adaptToClient} from "../../../utils/utils";

const testGenre = `surreal`;
const testMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014,
  descriptionParagraphs: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  rating: 8.9,
  ratingsCount: 240,
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  duration: 99,
  id: 1,
  isMyList: false
};
const testRawMovie = {
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
};
const testRawComment = {
  "id": 1,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
};
const testRawComments = [
  testRawComment,
  testRawComment,
  testRawComment
];

const testRawMovies = [
  testRawMovie,
  testRawMovie,
  testRawMovie
];
const testAdaptedMovie = adaptToClient(testRawMovie);
const testAdaptedMovies = testRawMovies.map((movie) => adaptToClient(movie));

const testAdaptedMovieFavorite = Object.assign({}, testAdaptedMovie);
testAdaptedMovieFavorite.isFavorite = true;
const testAdaptedMoviesWithFavorite = [
  testAdaptedMovieFavorite,
  testAdaptedMovie,
  testAdaptedMovie
];

it(
    `Reducer without additional parameters returns initial state`,
    () => {
      expect(appData(void 0, {}))
      .toEqual({
        selectedGenre: ALL_GENRE,
        genres: [],
        originalMovies: [],
        promotedMovie: {},
        selectedMovie: {},
        comments: []});
    }
);

it(
    `Reducer with ActionType.SELECT_GENRE should change selectedGenre from ALL_GENRE to testGenre`,
    () => {
      expect(appData(
          {
            selectedGenre: ALL_GENRE
          },
          {
            type: ActionType.SELECT_GENRE,
            payload: testGenre
          }
      ))
      .toEqual({
        selectedGenre: testGenre
      });
    }
);

it(
    `Reducer with ActionType.SELECT_GENRE should change selectedGenre from testGenre to ALL_GENRE`,
    () => {
      expect(appData(
          {
            selectedGenre: testGenre
          },
          {
            type: ActionType.SELECT_GENRE,
            payload: ALL_GENRE
          }
      ))
      .toEqual({
        selectedGenre: ALL_GENRE
      });
    }
);

it(
    `Reducer with ActionType.SELECT_MOVIE should return selectedMovie and selectedGenre`,
    () => {
      expect(appData(
          {
            selectedMovie: {},
            selectedGenre: ALL_GENRE
          },
          {
            type: ActionType.SELECT_MOVIE,
            payload: testMovie
          }
      ))
      .toEqual({
        selectedMovie: testMovie,
        selectedGenre: testMovie.genre
      });
    }
);

it(
    `Reducer with ActionType.LOAD_MOVIES should return originalMovies and genres`,
    () => {
      expect(appData(
          {
            originalMovies: [],
            genres: []
          },
          {
            type: ActionType.LOAD_MOVIES,
            payload: testRawMovies
          }
      ))
      .toEqual(
          {
            originalMovies: testAdaptedMovies,
            genres: createGenresList(testAdaptedMovies)
          }
      );
    }
);

it(
    `Reducer with ActionType.LOAD_PROMOTED_MOVIE returns promotedMovie`,
    () => {
      expect(appData(
          {
            promotedMovie: {}
          },
          {
            type: ActionType.LOAD_PROMOTED_MOVIE,
            payload: testRawMovie
          }
      ))
      .toEqual({
        promotedMovie: testAdaptedMovie
      });
    }
);

it(
    `Reducer with ActionType.LOAD_SELECTED_MOVIE returns selectedMovie and updates selectedGenre`,
    () => {
      expect(appData(
          {
            selectedMovie: {},
            selectedGenre: ALL_GENRE
          },
          {
            type: ActionType.LOAD_SELECTED_MOVIE,
            payload: testRawMovie
          }
      ))
      .toEqual({
        selectedMovie: testAdaptedMovie,
        selectedGenre: testAdaptedMovie.genre
      });
    }
);

it(
    `Reducer with ActionType.LOAD_SELECTED_MOVIE_COMMENTS returns comments`,
    () => {
      expect(appData(
          {
            comments: []
          },
          {
            type: ActionType.LOAD_SELECTED_MOVIE_COMMENTS,
            payload: testRawComments
          }
      ))
      .toEqual({
        comments: testRawComments
      });
    }
);


it(
    `Reducer with ActionType.ADD_MOVIE_TO_FAVORITE should change originalMovies and shouldn't change promotedMovie or selectedMovie`,
    () => {
      expect(appData(
          {
            originalMovies: testAdaptedMovies,
            selectedMovie: {},
            promotedMovie: {}
          },
          {
            type: ActionType.ADD_MOVIE_TO_FAVORITE,
            payload: 1
          }
      ))
      .toEqual({
        originalMovies: testAdaptedMoviesWithFavorite,
        selectedMovie: {},
        promotedMovie: {}
      });
    }
);

it(
    `Reducer with ActionType.ADD_MOVIE_TO_FAVORITE should change originalMovies and selectedMovie but shouldn't change promotedMovie`,
    () => {
      expect(appData(
          {
            originalMovies: testAdaptedMovies,
            selectedMovie: testAdaptedMovie,
            promotedMovie: {}
          },
          {
            type: ActionType.ADD_MOVIE_TO_FAVORITE,
            payload: 1
          }
      ))
      .toEqual({
        originalMovies: testAdaptedMoviesWithFavorite,
        selectedMovie: testAdaptedMovieFavorite,
        promotedMovie: {}
      });
    }
);

it(
    `Reducer with ActionType.ADD_MOVIE_TO_FAVORITE should change originalMovies and promotedMovie but shouldn't change selectedMovie`,
    () => {
      expect(appData(
          {
            originalMovies: testAdaptedMovies,
            selectedMovie: {},
            promotedMovie: testAdaptedMovie
          },
          {
            type: ActionType.ADD_MOVIE_TO_FAVORITE,
            payload: 1
          }
      ))
      .toEqual({
        originalMovies: testAdaptedMoviesWithFavorite,
        selectedMovie: {},
        promotedMovie: testAdaptedMovieFavorite
      });
    }
);

it(
    `Reducer with ActionType.ADD_MOVIE_TO_FAVORITE should change originalMovies, promotedMovie, and selectedMovie`,
    () => {
      expect(appData(
          {
            originalMovies: testAdaptedMovies,
            promotedMovie: testAdaptedMovie,
            selectedMovie: testAdaptedMovie
          },
          {
            type: ActionType.ADD_MOVIE_TO_FAVORITE,
            payload: 1
          }
      ))
      .toEqual({
        originalMovies: testAdaptedMoviesWithFavorite,
        promotedMovie: testAdaptedMovieFavorite,
        selectedMovie: testAdaptedMovieFavorite
      });
    }
);
