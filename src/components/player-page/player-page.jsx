import React from "react";
import VideoPlayer from "../video-player/video-player";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";
import {onExitButtonClickType} from "../types/types";
import {CallSource} from "../../utils/const";

const PlayerPage = (props) => {
  const {onExitButtonClick, movie} = props;
  const {videoUrl} = movie;

  const imageName = `bg-the-grand-budapest-hotel`;

  return (
    <div className="player">
      <VideoPlayer
        videoUrl={videoUrl}
        imageName={imageName}
        callSource={CallSource.PLAYER}
      />
      <PlayerExit
        onExitButtonClick = {onExitButtonClick}
      />
      <PlayerControls/>
    </div>
  );
};

PlayerPage.propTypes = onExitButtonClickType;

export default PlayerPage;
