import React from "react";
import PlayerVideo from "./modules/player-video";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";
import {onExitButtonClickType} from "../types/types";

const PlayerPage = (props) => {
  const {onExitButtonClick} = props;

  return (
    <div className="player">
      <PlayerVideo/>
      <PlayerExit
        onExitButtonClick = {onExitButtonClick}
      />
      <PlayerControls/>
    </div>
  );
};

PlayerPage.propTypes = onExitButtonClickType;

export default PlayerPage;
