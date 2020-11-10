import {createSelector} from "reselect";
import {getMovies} from "./genre-selector";

export const filterMoviesByMyList = createSelector(
    [getMovies],
    (movies) => {
      return movies.filter((movie) => movie.isFavorite);
    }
);
