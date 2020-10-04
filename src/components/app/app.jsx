import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import {appType} from "../types/types";

const App = (props) => {
  const {name, genre, releaseDate, genres, movies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            name={name}
            genre={genre}
            releaseDate={releaseDate}
            genres={genres}
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

App.propTypes = appType;

export default App;
