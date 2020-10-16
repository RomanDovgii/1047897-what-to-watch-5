import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {movies} from "./mocks/movies";
import {PROMOTED_MOVIE} from "./utils/const";

ReactDOM.render(
    <App
      promotedMovie = {PROMOTED_MOVIE}
      movies = {movies}
    />,
    document.querySelector(`#root`)
);
