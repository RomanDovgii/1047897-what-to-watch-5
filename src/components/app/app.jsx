import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import withActiveMainPlayer from "../../hoc/with-active-main-player/with-active-main-player";
import withLoading from "../../hoc/with-loading/with-loading";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../utils/const";

const PlayerPageWrapper = withLoading(withActiveMainPlayer(PlayerPage));
const AddReviewWrapper = withLoading(AddReviewPage);
const MainPageWrapper = withLoading(MainPage);

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          render={({history}) => (
            <MainPageWrapper
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.SIGN_IN}
          render={({history}) => (
            <LoginPage
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
            />
          )}/>

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={({history}) => (
            <MyListPage
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.FILM}
          render={({history, match}) => (
            <MoviePage
              id = {match.params.id}
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
            />
          )}
        />

        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={({history, match}) => (
            <AddReviewWrapper
              id = {match.params.id}
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.PLAYER}
          render={({history, match}) => (
            <PlayerPageWrapper
              id = {match.params.id}
              onExitButtonClick = {() => history.goBack()}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
