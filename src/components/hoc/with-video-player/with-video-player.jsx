import React from "react";
import VideoPlayer from "../../video-player/video-player";

const withVideoPlayer = (Component) => {
  const WithVideoPlayer = (props) => {
    return <Component
      {...props}
      renderPlayer={(videoUrl, imageName, callSource, isPlaying) => {
        return (
          <VideoPlayer
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
