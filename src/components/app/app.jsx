import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import {onBigPlayButtonClickType} from "../types/types";
import withActiveMainPlayer from "../hoc/with-active-main-player/with-active-main-player";
import {connect} from "react-redux";
import {startPlaying} from "../../store/actions/action";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../utils/const";

const PlayerPageWrapper = withActiveMainPlayer(PlayerPage);

const App = (props) => {
  const {onBigPlayButtonClick} = props;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          render={({history}) => (
            <MainPage
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
              onPlayButtonClick={() => {
                onBigPlayButtonClick();
                history.push(AppRoute.PLAYER);
              }}
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
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.FILM}
          render={({history}) => (
            <MoviePage
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
              onPlayButtonClick={() => {
                onBigPlayButtonClick();
              }}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.ADD_REVIEW}
          render={({history}) => (
            <AddReviewPage
              onUserIconClick = {() => history.push(AppRoute.MY_LIST)}
              onWTWLogoClick={() => history.push(AppRoute.MAIN)}
            />
          )}
        />

        <Route
          exact
          path={AppRoute.PLAYER}
          render={({history}) => (
            <PlayerPageWrapper
              onExitButtonClick = {() => history.goBack()}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = onBigPlayButtonClickType;

const mapDispatchToProps = (dispatch) => ({
  onBigPlayButtonClick() {
    dispatch(startPlaying());
  }
});

export {App};
export default connect(null, mapDispatchToProps)(App);
