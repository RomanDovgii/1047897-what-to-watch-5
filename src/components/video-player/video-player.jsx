import React, {createRef, PureComponent} from "react";
import {generateVideoType} from "../../utils/utils";
import {VideoPlayerType} from "../types/types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._sourceRef = createRef();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const {videoUrl} = this.props;

    const source = this._sourceRef.current;
    const video = this._videoRef.current;

    source.src = videoUrl;
    source.type = generateVideoType(videoUrl);

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
  }

  render() {
    const {imageName} = this.props;

    return (
      <video
        autoPlay="autoplay"
        className="player__video"
        poster={`img/` + imageName + `.jpg`}
        ref={this._videoRef}
        muted
      >
        <source
          ref={this._sourceRef}
        />
      </video>
    );
  }
}

VideoPlayer.propTypes = VideoPlayerType;
