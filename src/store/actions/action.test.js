import {
  changeGenre,
  showMore,
  resetShownMovies,
  startPlaying,
  selectMovie,
  updateUserInfo,
  throwErr,
  removeErr,
  addMovieToFavoriteLocal,
  redirectToRoute,
  requireAuthorization,
  loadMovies,
  loadPromotedMovie,
  loadSelectedMovie,
  loadSelectedMovieComments
} from "./action";

import {ActionType, AuthorizationStatus} from "../../utils/const";

const testGenre = `surreal`;

const testMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014,
  descriptionParagraphs: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  director: `Wes Andreson`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  rating: 8.9,
  ratingsCount: 240,
  videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  duration: 99,
  id: 1,
  isMyList: false
};

const testUserInfo = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`
};

const testMovies = [
  testMovie,
  testMovie,
  testMovie
];

const testComment = {
  id: 1,
  user: {
    id: 4,
    name: `Kate Muir`
  },
  rating: 8.9,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`
};

const testComments = [
  testComment,
  testComment,
  testComment
];

const testUrl = `/favorite`;

describe(
    `Action creator works correctly`,
    () => {
      it(
          `Action creator for changing genre returns correct genre for change`,
          () => {
            expect(changeGenre(testGenre))
            .toEqual({
              type: ActionType.SELECT_GENRE,
              payload: testGenre
            });
          }
      );

      it(
          `Action creator for showing more movies increments by 8 each step`,
          () => {
            expect(showMore())
            .toEqual({
              type: ActionType.SHOW_MORE,
              payload: 8
            });
          }
      );

      it(
          `Action creator for reseting shown movies returns correct action`,
          () => {
            expect(resetShownMovies())
            .toEqual({
              type: ActionType.RESET_SHOWN_MOVIES
            });
          }
      );

      it(
          `Action creator for starting playing returns correct action`,
          () => {
            expect(startPlaying())
            .toEqual({
              type: ActionType.START_PLAYING
            });
          }
      );

      it(
          `Action creator for selecting movie returns correct movie`,
          () => {
            expect(selectMovie(testMovie))
            .toEqual({
              type: ActionType.SELECT_MOVIE,
              payload: testMovie
            });
          }
      );

      it(
          `Action creator returns correct user information`,
          () => {
            expect(updateUserInfo(testUserInfo))
            .toEqual({
              type: ActionType.UPDATE_USER_INFO,
              payload: testUserInfo
            });
          }
      );

      it(
          `Action creator for throwing errors returns correct action`,
          () => {
            expect(throwErr())
            .toEqual({
              type: ActionType.THROW_ERR
            });
          }
      );

      it(
          `Action creator for removing error returns correct action`,
          () => {
            expect(removeErr())
            .toEqual({
              type: ActionType.REMOVE_ERR
            });
          }
      );

      it(
          `Action creator for adding movie to favorite returns correct action and correct id`,
          () => {
            expect(addMovieToFavoriteLocal(testMovie.id))
            .toEqual({
              type: ActionType.ADD_MOVIE_TO_FAVORITE,
              payload: testMovie.id
            });
          }
      );

      it(
          `Action creator for redirecting user to route returns correct action and correct url`,
          () => {
            expect(redirectToRoute(testUrl))
            .toEqual({
              type: ActionType.REDIRECT_TO_ROUTE,
              payload: testUrl
            });
          }
      );

      it(
          `Action creator for requiring user authorization returns correct action and no auth when it is provided`,
          () => {
            expect(requireAuthorization(AuthorizationStatus.NO_AUTH))
            .toEqual({
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: AuthorizationStatus.NO_AUTH
            });
          }
      );

      it(
          `Action creator for requiring user authorization returns correct action and auth when it is provided`,
          () => {
            expect(requireAuthorization(AuthorizationStatus.AUTH))
            .toEqual({
              type: ActionType.REQUIRED_AUTHORIZATION,
              payload: AuthorizationStatus.AUTH
            });
          }
      );

      it(
          `Action creator for loading movies returns correct action and correct array of movies`,
          () => {
            expect(loadMovies(testMovies))
            .toEqual({
              type: ActionType.LOAD_MOVIES,
              payload: testMovies
            });
          }
      );

      it(
          `Action creator for loading promoted movie returns correct action and movie object`,
          () => {
            expect(loadPromotedMovie(testMovie))
            .toEqual({
              type: ActionType.LOAD_PROMOTED_MOVIE,
              payload: testMovie
            });
          }
      );

      it(
          `Action creator for loading selected movie returns correct action and movie objects`,
          () => {
            expect(loadSelectedMovie(testMovie))
            .toEqual({
              type: ActionType.LOAD_SELECTED_MOVIE,
              payload: testMovie
            });
          }
      );

      it(
          `Action creator for loading selected movie comments returns correct action and comments array`,
          () => {
            expect(loadSelectedMovieComments(testComments))
            .toEqual({
              type: ActionType.LOAD_SELECTED_MOVIE_COMMENTS,
              payload: testComments
            });
          }
      );
    }
);
