import React from "react";
import {userBlockType} from "../../types/types";

const UserBlock = (props) => {
  const {onUserIconClick, isRendered} = props;

  if (isRendered) {
    return (
      <div
        className="user-block"
        onClick={(evt) => {
          evt.preventDefault();

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
