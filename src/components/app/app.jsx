import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import {appType} from "../types/types";

const App = (props) => {
  const {name, genre, releaseDate, genres, movies} = props;

  return (
    <BrowserRouter>
      <Switch exact path="/">
        <MainPage
          name={name}
          genre={genre}
          releaseDate={releaseDate}
          genres={genres}
          movies={movies}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appType;

export default App;
