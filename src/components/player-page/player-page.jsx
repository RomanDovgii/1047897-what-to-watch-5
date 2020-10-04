import React from "react";
import PlayerVideo from "./modules/player-video";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";

const PlayerPage = () => {
  return (
    <div className="player">
      <PlayerVideo/>
      <PlayerExit/>
      <PlayerControls/>
    </div>
  );
};

export default PlayerPage;
