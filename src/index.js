import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {movies} from "./mocks/movies";
import {PROMOTED_MOVIE} from "./utils/const";
import {comments} from "./mocks/comments";

ReactDOM.render(
    <App
      promotedMovie = {PROMOTED_MOVIE}
      movies = {movies}
      comments = {comments}
    />,
    document.querySelector(`#root`)
);
