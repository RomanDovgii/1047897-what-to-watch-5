import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import {promotedMovieMoviesCommentsType} from "../types/types";
import {filterMoviesForMyList, filterMoviesByGenre} from "../../utils/utils";
import withVideoPlayer from "../hoc/with-video-player/with-video-player";

const PlayerPageWrapper = withVideoPlayer(PlayerPage);

const App = (props) => {
  const {promotedMovie, movies, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainPage
              onUserIconClick={() => history.push(`/mylist`)}
              onPlayButtonClick={() => history.push(`/player/:id`)}
              onWTWLogoClick={() => history.push(`/`)}
              promotedMovie = {promotedMovie}
              movies = {movies}
            />
          )}
        />

        <Route exact path="/login">
          <LoginPage/>
        </Route>

        <Route
          exact
          path="/mylist"
          render={({history}) => (
            <MyListPage
              onUserIconClick = {() => history.push(`/mylist`)}
              onWTWLogoClick={() => history.push(`/`)}
              movies={filterMoviesForMyList(movies)}
            />
          )}
        />

        <Route
          exact
          path="/films/:id"
          render={({history}) => (
            <MoviePage
              onUserIconClick = {() => history.push(`/mylist`)}
              onWTWLogoClick={() => history.push(`/`)}
              onPlayButtonClick={() => history.push(`/player/:id`)}
              promotedMovie = {promotedMovie}
              movies = {filterMoviesByGenre(movies, promotedMovie.genre)}
              comments = {comments}
            />
          )}
        />

        <Route
          exact
          path="/films/:id/review"
          render={({history}) => (
            <AddReviewPage
              onUserIconClick = {() => history.push(`/mylist`)}
              onWTWLogoClick={() => history.push(`/`)}
            />
          )}
        />

        <Route
          exact
          path="/player/:id"
          render={({history}) => (
            <PlayerPageWrapper
              movie = {promotedMovie}
              onExitButtonClick = {() => history.goBack()}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = promotedMovieMoviesCommentsType;

export default App;
