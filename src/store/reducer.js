import {ActionType} from "../utils/const";
import {createGenresList, extend} from "../utils/utils";
import {SHOWN_MOVIES_COUNT, ALL_GENRE} from "../utils/const";
import {movies} from "../mocks/movies";

const initialState = {
  selectedGenre: ALL_GENRE,
  genres: createGenresList(movies),
  movieCards: movies,
  shownMoviesCount: SHOWN_MOVIES_COUNT,
  isPlayerPlaying: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:

      const newlySelectedGenre = action.payload;
      const filteredMovies = newlySelectedGenre === ALL_GENRE ? movies : movies.filter((movie) => movie.genre === newlySelectedGenre);

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
  }

  return state;
};

export {reducer};
