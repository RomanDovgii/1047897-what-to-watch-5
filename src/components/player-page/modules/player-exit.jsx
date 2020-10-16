import React from "react";
import {onExitButtonClickType} from "../../types/types";

const PlayerExit = (props) => {
  const {onExitButtonClick} = props;

  return (
    <button
      type="button"
      className="player__exit"
      onClick={(evt) => {
        evt.preventDefault();

        onExitButtonClick();
      }}
    >
      Exit
    </button>
  );
};

PlayerExit.propTypes = onExitButtonClickType;

export default PlayerExit;
