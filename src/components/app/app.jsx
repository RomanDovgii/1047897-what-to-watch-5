import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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

const PlayerPageWrapper = withActiveMainPlayer(PlayerPage);

const App = (props) => {
  const {onBigPlayButtonClick} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <MainPage
              onUserIconClick={() => history.push(`/mylist`)}
              onPlayButtonClick={() => {
                onBigPlayButtonClick();
                history.push(`/player/:id`);
              }}
              onWTWLogoClick={() => history.push(`/`)}
            />
          )}
        />

        <Route exact path="/login">
          <LoginPage/>
        </Route>

        <Route
          exact
          path="/mylist"
          render={({history}) => (
            <MyListPage
              onUserIconClick = {() => history.push(`/mylist`)}
              onWTWLogoClick={() => history.push(`/`)}
            />
          )}
        />

        <Route
          exact
          path="/films/:id"
          render={({history}) => (
            <MoviePage
              onUserIconClick = {() => history.push(`/mylist`)}
              onWTWLogoClick={() => history.push(`/`)}
              onPlayButtonClick={() => {
                onBigPlayButtonClick();
                history.push(`/player/:id`);
              }}
            />
          )}
        />

        <Route
          exact
          path="/films/:id/review"
          render={({history}) => (
            <AddReviewPage
              onUserIconClick = {() => history.push(`/mylist`)}
              onWTWLogoClick={() => history.push(`/`)}
            />
          )}
        />

        <Route
          exact
          path="/player/:id"
          render={({history}) => (
            <PlayerPageWrapper
              onExitButtonClick = {() => history.goBack()}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
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
