import {ActionType} from "../utils/const";
import {extend} from "../utils/utils";
import {movies} from "../mocks/movies";

const allGenres = `All genres`;

const initialState = {
  selectedGenre: allGenres,
  movieCards: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:

      const newlySelectedGenre = action.payload;
      const filteredMovies = newlySelectedGenre === allGenres ? movies : movies.filter((movie) => movie.genre === newlySelectedGenre);

      return extend(
          state,
          {
            selectedGenre: newlySelectedGenre,
            movieCards: filteredMovies
          }
      );
  }

  return state;
};

export {reducer};
