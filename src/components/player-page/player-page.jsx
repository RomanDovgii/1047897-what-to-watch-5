import React from "react";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";
import {onExitButtonClickType} from "../types/types";
import {CallSource} from "../../utils/const";

const PlayerPage = (props) => {
  const {onExitButtonClick, movie, renderPlayer} = props;

  const {videoUrl} = movie;

  const imageName = `bg-the-grand-budapest-hotel`;

  return (
    <div className="player">
      {renderPlayer(videoUrl, imageName, CallSource.PLAYER, true)}
      <PlayerExit
        onExitButtonClick = {onExitButtonClick}
      />
      <PlayerControls/>
    </div>
  );
};

PlayerPage.propTypes = onExitButtonClickType;

export default PlayerPage;
