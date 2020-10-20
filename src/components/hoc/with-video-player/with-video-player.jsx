import React, {PureComponent} from "react";
import VideoPlayer from "../../video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0
      };
    }

    render() {

      return <Component
        {...this.props}
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
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
