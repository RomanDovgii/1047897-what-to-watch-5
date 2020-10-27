import {ActionType} from "../utils/const";
import {createGenresList, extend} from "../utils/utils";
import {SHOWN_MOVIES_COUNT} from "..//utils/const";
import {movies} from "../mocks/movies";

const allGenres = `All genres`;
let filteredMovies = movies;

const initialState = {
  selectedGenre: allGenres,
  genres: createGenresList(movies),
  movieCards: movies,
  shownMoviesCount: SHOWN_MOVIES_COUNT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:

      const newlySelectedGenre = action.payload;
      filteredMovies = newlySelectedGenre === allGenres ? movies : movies.filter((movie) => movie.genre === newlySelectedGenre);

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
  }

  return state;
};

export {reducer};
