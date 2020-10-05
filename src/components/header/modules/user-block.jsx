import React from "react";
import {optionalElementType} from "../../types/types";

const UserBlock = (props) => {
  const {isRendered} = props;

  if (isRendered) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    );
  }

  return null;
};

UserBlock.propTypes = optionalElementType;

export default UserBlock;