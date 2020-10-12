import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import {moviesType} from "../types/types";

const App = (props) => {
  const {movies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            movies={movies}
          />
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/mylist">
          <MyListPage/>
        </Route>
        <Route exact path="/films/:id">
          <MoviePage/>
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

App.propTypes = moviesType;

export default App;
