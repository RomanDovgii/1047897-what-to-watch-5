import React, {createRef, PureComponent} from "react";
import {generateVideoType} from "../../utils/utils";
import {withActivePlayerType} from "../../components/types/types";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._sourceRef = createRef();

      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      const {imageName} = this.props;

      const video = this._videoRef.current;

      video.muted = true;
      video.autoPlay = true;
      video.poster = imageName;
    }

    componentDidUpdate() {
      const {videoUrl, isPlaying} = this.props;

      const video = this._videoRef.current;
      const source = this._sourceRef.current;

      source.src = videoUrl;
      source.type = generateVideoType(videoUrl);
      video.load();

      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false
        });
        if (isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
    }

    render() {
      return (
        <Component>
          <video
            autoPlay="autoplay"
            className="player__video"
            ref={this._videoRef}
          >
            <source
              ref={this._sourceRef}
            />
          </video>
        </Component>
      );
    }
  }

  WithActivePlayer.propTypes = withActivePlayerType;

  return WithActivePlayer;
};

export default withActivePlayer;
