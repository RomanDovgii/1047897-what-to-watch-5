import {createGenresList, extend} from "../../utils/utils";
import {SHOWN_MOVIES_COUNT, ALL_GENRE, ActionType} from "../../utils/const";

const initialState = {
  selectedGenre: ALL_GENRE,
  genres: createGenresList([]),
  movies: [],
  promotedMovie: {},
  shownMoviesCount: SHOWN_MOVIES_COUNT,
  isPlayerPlaying: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:

      const newlySelectedGenre = action.payload;
      const filteredMovies = newlySelectedGenre === ALL_GENRE ? state.movies : state.movies.filter((movie) => movie.genre === newlySelectedGenre);

      return extend(
          state,
          {
            selectedGenre: newlySelectedGenre,
            movieCards: filteredMovies
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
    case ActionType.LOAD_MOVIES:
      return extend(
          state,
          {
            movies: action.payload,
            genres: createGenresList(action.payload)
          }
      );
    case ActionType.LOAD_PROMOTED_MOVIE:
      return extend(
          state,
          {
            promotedMovie: action.payload
          }
      );
  }

  return state;
};

export {reducer};
