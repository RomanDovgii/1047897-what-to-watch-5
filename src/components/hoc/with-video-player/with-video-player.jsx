import React, {PureComponent} from "react";
import VideoPlayer from "../../video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0
      };
    }

    render() {

      return <Component
        {...this.props}
        renderPlayer={(videoUrl, imageName) => {
          return (
            <VideoPlayer
              videoUrl={videoUrl}
              imageName={imageName}
            />
          );
        }}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withVideoPlayer;
