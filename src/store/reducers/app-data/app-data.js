import {createGenresList, extend, adaptToClient} from "../../../utils/utils";
import {ALL_GENRE, ActionType} from "../../../utils/const";

const initialState = {
  selectedGenre: ALL_GENRE,
  genres: createGenresList([]),
  originalMovies: [],
  promotedMovie: {},
  selectedMovie: {}
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      const newlySelectedGenre = action.payload;

      return extend(
          state,
          {
            selectedGenre: newlySelectedGenre
          }
      );
    case ActionType.SELECT_MOVIE:
      console.log(action.payload)

      return extend(
          state,
          {
            selectedMovie: action.payload,
            selectedGenre: action.payload.genre
          }
      );
    case ActionType.LOAD_MOVIES:
      const adaptedMovies = action.payload.map((movie) => adaptToClient(movie));

      return extend(
          state,
          {
            originalMovies: adaptedMovies,
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
