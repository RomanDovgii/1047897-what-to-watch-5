import {createGenresList, extend, adaptToClient} from "../../../utils/utils";
import {ALL_GENRE, ActionType} from "../../../utils/const";

const initialState = {
  selectedGenre: ALL_GENRE,
  genres: createGenresList([]),
  originalMovies: [],
  promotedMovie: {},
  selectedMovie: {},
  comments: []
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
    case ActionType.LOAD_SELECTED_MOVIE:
      const adaptedSelectedMovie = adaptToClient(action.payload);
      return extend(
          state,
          {
            selectedMovie: adaptedSelectedMovie
          }
      );
    case ActionType.LOAD_SELECTED_MOVIE_COMMENTS:
      return extend(
          state,
          {
            comments: action.payload
          }
      );
    case ActionType.ADD_MOVIE_TO_FAVORITE:
      const index = action.payload - 1;
      const updatedElement = state.originalMovies[index];
      const isFavorite = updatedElement.isFavorite;
      updatedElement.isFavorite = !isFavorite;
      const updatedOriginalMovies = [...state.originalMovies];
      updatedOriginalMovies.splice(index, 1, updatedElement);

      console.log(state.promotedMovie);

      return extend(
          state,
          {
            originalMovies: updatedOriginalMovies,
            promotedMovie: state.promotedMovie.id === action.payload ? updatedElement : state.promotedMovie,
            selectedMovie: state.selectedMovie.id === action.payload ? updatedElement : state.selectedMovie,
          }
      );
  }

  return state;
};

export {appData};
