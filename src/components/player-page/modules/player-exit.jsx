import React from "react";
import {Link} from "react-router-dom";

const PlayerExit = () => {
  return (
    <Link to="/">
      <button
        type="button"
        className="player__exit"
      >
        Exit
      </button>
    </Link>
  );
};

export default PlayerExit;
