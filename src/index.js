import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {movies} from "./mocks/movies";
import {PROMOTED_MOVIE} from "./utils/const";
import {comments} from "./mocks/comments";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promotedMovie = {PROMOTED_MOVIE}
        movies = {movies}
        comments = {comments}
      />
    </Provider>,
    document.querySelector(`#root`)
);
