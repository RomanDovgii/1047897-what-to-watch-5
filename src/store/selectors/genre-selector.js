import {createSelector} from "reselect";
import {ALL_GENRE} from "../../utils/const";

export const getMovies = (state) => state.originalMovies;
const getCurrentGenre = (state) => state.selectedGenre;

export const filterMoviesByGenre = createSelector(
    [getMovies, getCurrentGenre],
    (movies, genre) => {
      switch (genre) {
        case ALL_GENRE:
          return movies;
        default:
          return movies.filter((movie) => movie.genre === genre);
      }
    }
);
