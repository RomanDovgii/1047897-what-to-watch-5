import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import {promotedMovieAndMoviesType} from "../types/types";
import {filterMoviesForMyList} from "../../utils/utils";

const App = (props) => {
  const {promotedMovie, movies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainPage
              onPlayButtonClick={() => history.push(`/player/:id`)}
              promotedMovie = {promotedMovie}
              movies = {movies}
            />
          )}
        />
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/mylist">
          <MyListPage
            movies={filterMoviesForMyList(movies)}
          />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage
            promotedMovie = {promotedMovie}
            movies = {movies}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage/>
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = promotedMovieAndMoviesType;

export default App;
