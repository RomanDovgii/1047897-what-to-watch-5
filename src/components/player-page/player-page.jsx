import React, {createRef, PureComponent} from "react";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";
import {onExitButtonClickType} from "../types/types";

class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._sourceRef = createRef();
    this._movieDuration = 0;

    this.state = {
      isPlaying: false,
      isLoading: true,
      currentTime: 0
    };

    this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.onloadedmetadata = () => {
      this._movieDuration = video.duration;
    };
  }

  _handlePlayButtonClick() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  _handleFullScreenButtonClick() {
    const video = this._videoRef.current;

    video.requestFullscreen();
  }

  render() {
    const {onExitButtonClick, movie} = this.props;
    const {videoUrl} = movie;

    return (
      <div className="player">
        <video
          ref={this._videoRef}
          className="player__video"
          poster="img/bg-the-grand-budapest-hotel.jpg"
          onLoadedMetadata={(evt) => {
            evt.preventDefault();
            this._movieDuration = this._videoRef.current.duration;
            this.setState({
              isLoading: false
            });
          }}
          onTimeUpdate={(evt) => {
            evt.preventDefault();
            this.setState({
              currentTime: this._videoRef.current.currentTime
            });
          }}
        >
          <source ref={this._sourceRef} src={videoUrl} type="video/webm"/>
        </video>
        <PlayerExit
          onExitButtonClick = {onExitButtonClick}
        />
        <PlayerControls
          isPlaying={this.state.isPlaying}
          isLoading={this.state.isLoading}
          duration={this._movieDuration}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
          currentTime = {this.state.currentTime}
        />
      </div>
    );
  }
}

PlayerPage.propTypes = onExitButtonClickType;

export default PlayerPage;
