import {createSelector} from "reselect";
import {createGenresList, extend, adaptToClient} from "../../../utils/utils";
import {ALL_GENRE, ActionType} from "../../../utils/const";

const initialState = {
  selectedGenre: ALL_GENRE,
  genres: createGenresList([]),
  originalMovies: [],
  movies: [],
  promotedMovie: {},
  selectedMovie: {}
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      const newlySelectedGenre = action.payload;

      const filterMovies = createSelector(() => {
        switch (newlySelectedGenre) {
          case ALL_GENRE:
            return state.originalMovies;
          default:
            return state.originalMovies.filter((movie) => movie.genre === newlySelectedGenre);
        }
      });

      const filteredMovies = filterMovies();

      return extend(
          state,
          {
            selectedGenre: newlySelectedGenre,
            movies: filteredMovies
          }
      );
    case ActionType.SELECT_MOVIE:
      return extend(
          state,
          {
            selectedMovie: action.payload
          }
      );
    case ActionType.LOAD_MOVIES:
      const adaptedMovies = action.payload.map((movie) => adaptToClient(movie));

      return extend(
          state,
          {
            originalMovies: adaptedMovies,
            movies: adaptedMovies,
            genres: createGenresList(adaptedMovies)
          }
      );
    case ActionType.LOAD_PROMOTED_MOVIE:
      const adaptedMovie = adaptToClient(action.payload);

      return extend(
          state,
          {
            promotedMovie: adaptedMovie
          }
      );
  }

  return state;
};

export {appData};
