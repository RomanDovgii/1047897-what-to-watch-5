import React from "react";
import {onExitButtonClickType} from "../types/types";

const PlayerPageExit = (props) => {
  const {onExitButtonClick} = props;

  return (
    <button
      type="button"
      className="player__exit"
      onClick={onExitButtonClick}
    >
      Exit
    </button>
  );
};

PlayerPageExit.propTypes = onExitButtonClickType;

export default PlayerPageExit;
