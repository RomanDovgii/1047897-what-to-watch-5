import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {movies} from "./mocks/movies";

ReactDOM.render(
    <App
      movies = {movies}
    />,
    document.querySelector(`#root`)
);
