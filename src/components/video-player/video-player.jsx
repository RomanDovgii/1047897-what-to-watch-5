import React from "react";
import {videoPlayerType} from "../types/types";

const VideoPlayer = (props) => {
  const {children} = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

VideoPlayer.propTypes = {};

export default VideoPlayer;
