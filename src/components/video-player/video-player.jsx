import React, {createRef, PureComponent} from "react";
import {generateVideoType} from "../../utils/utils";
import {VideoPlayerType} from "../types/types";
import {CallSource} from "../../utils/const";

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
    const {imageName, callSource} = this.props;

    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });
    video.muted = callSource === CallSource.CATALOG ? true : false;
    video.autoPlay = callSource === CallSource.CATALOG ? true : false;
    video.poster = `img/` + imageName + `.jpg`;
  }

  componentDidUpdate() {
    const {videoUrl, isPlaying} = this.props;

    const video = this._videoRef.current;
    const source = this._sourceRef.current;

    source.src = videoUrl;
    source.type = generateVideoType(videoUrl);
    video.load();

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
  }

  render() {
    return (
      <video
        autoPlay="autoplay"
        className="player__video"
        ref={this._videoRef}
      >
        <source
          ref={this._sourceRef}
        />
      </video>
    );
  }
}

VideoPlayer.propTypes = VideoPlayerType;
