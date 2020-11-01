import React from "react";
import VideoPlayer from "../../video-player/video-player";
import withActivePlayer from "../with-active-player/with-active-player";

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

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
