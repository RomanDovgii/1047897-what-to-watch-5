import React from "react";
import {childrenType} from "../types/types";

const VideoPlayer = (props) => {
  const {children} = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

VideoPlayer.propTypes = childrenType;

export default VideoPlayer;
