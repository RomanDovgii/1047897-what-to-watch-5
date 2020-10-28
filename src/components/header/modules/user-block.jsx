import React from "react";
import {userBlockType} from "../../types/types";
import {ALL_GENRE} from "../../../utils/const";

const UserBlock = (props) => {
  const {onUserIconClick, resetState, isRendered} = props;

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
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    );
  }

  return null;
};

UserBlock.propTypes = userBlockType;

export default UserBlock;
