import React from "react";
import VideoPlayer from "../../components/video-player/video-player";
import withActivePlayer from "../with-active-player/with-active-player";
import {movieType} from "../../components/types/types";

const VideoPlayerWrapper = withActivePlayer(VideoPlayer);

const withVideoPlayer = (Component) => {
  const WithVideoPlayer = (props) => {
    return <Component
      {...props}
      renderPlayer={(videoUrl, imageName, callSource, isPlaying) => {
        return (
          <VideoPlayerWrapper
            videoUrl={videoUrl}
            imageName={imageName}
            callSource={callSource}
            isPlaying={isPlaying}
          />
        );
      }}
    />;
  };

  WithVideoPlayer.propTypes = movieType;

  return WithVideoPlayer;
};

export default withVideoPlayer;
