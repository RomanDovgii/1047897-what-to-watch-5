import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

import App from "./components/app/app";

import {AuthorizationStatus} from "./utils/const";

import {createAPI} from "./services/api";

import {reducer} from "./store/reducers/reducer";
import {requireAuthorization} from "./store/actions/action";
import {fetchMovieList, fetchPromotedMovie, checkAuth} from "./store/actions/api-actions";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchMovieList()),
  store.dispatch(fetchPromotedMovie()),
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch((err) => {
  throw err;
});


