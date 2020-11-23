import React from "react";
import {userBlockType} from "../types/types";
import {ALL_GENRE} from "../../utils/const";
import {connect} from "react-redux";

const HeaderUserBlock = (props) => {
  const {onUserIconClick, resetState, isRendered, avatarUrl} = props;

  if (isRendered) {
    return (
      <div
        className="user-block"
        onClick={(evt) => {
          evt.preventDefault();

          resetState(ALL_GENRE);
          onUserIconClick();
        }}
      >
        <div className="user-block__avatar">
          <img src={avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="user-block"
        onClick={(evt) => {
          evt.preventDefault();

          resetState(ALL_GENRE);
          onUserIconClick();
        }}
      >
        <div className="user-block">
          <a href="#" className="user-block__link">Sign in</a>
        </div>
      </div>
    );
  }
};

HeaderUserBlock.propTypes = userBlockType;

const mapStateToProps = ({USER}) => ({
  avatarUrl: USER.avatarUrl
});

export {HeaderUserBlock};
export default connect(mapStateToProps)(HeaderUserBlock);
