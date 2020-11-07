import {createSelector} from "reselect";
import {createGenresList, extend, adaptToClient} from "../../utils/utils";
import {SHOWN_MOVIES_COUNT, ALL_GENRE, ActionType} from "../../utils/const";

const initialState = {
  selectedGenre: ALL_GENRE,
  genres: createGenresList([]),
  originalMovies: [],
  movies: [],
  promotedMovie: {},
  selectedMovie: {},
  shownMoviesCount: SHOWN_MOVIES_COUNT,
  isPlayerPlaying: false
};

const reducer = (state = initialState, action) => {
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
    case ActionType.SHOW_MORE:

      const updatedShownMoviesCount = state.shownMoviesCount + action.payload;

      return extend(
          state,
          {
            shownMoviesCount: updatedShownMoviesCount
          }
      );
    case ActionType.RESET_SHOWN_MOVIES:
      return extend(
          state,
          {
            shownMoviesCount: SHOWN_MOVIES_COUNT
          }
      );
    case ActionType.START_PLAYING:
      return extend(
          state,
          {
            isPlayerPlaying: !state.isPlayerPlaying
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

export {reducer};
