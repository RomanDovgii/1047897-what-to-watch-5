import {generateCommentsById} from "../utils/utils";
import {movies} from "./movies";

const movieIds = [];

movies.map((movie) => {
  movieIds.push(movie.id);
});


const movieIdsWithPromotedMovie = [1, ...movieIds];

export const comments = generateCommentsById(movieIdsWithPromotedMovie);
