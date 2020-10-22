import {generateCommentsById} from "../utils/utils";
import {movies} from "./movies";

const movieIds = movies.reduce((accumulator, movie) => {
  accumulator.push(movie.id);
  return accumulator;
}, []);

const movieIdsWithPromotedMovie = [1, ...movieIds];

export const comments = generateCommentsById(movieIdsWithPromotedMovie);
