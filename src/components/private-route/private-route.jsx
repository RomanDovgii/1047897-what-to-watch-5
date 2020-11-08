import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../utils/const";
import {privateRouteType} from "../types/types";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={
        (routerProps) => {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? render(routerProps)
              : <Redirect to={AppRoute.LOGIN}/>
          );
        }
      }
    />
  );
};

PrivateRoute.propTypes = privateRouteType;

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
