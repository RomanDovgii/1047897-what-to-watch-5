import React, {createRef, PureComponent} from "react";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";
import {PlayerPageType} from "../types/types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {generateVideoType} from "../../utils/utils";

class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._sourceRef = createRef();
    this._movieDuration = 0;

    this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.onloadedmetadata = () => {
      this._movieDuration = video.duration;
    };
  }

  _handlePlayButtonClick() {
    const {onPlayButtonCLick, isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    onPlayButtonCLick();
  }

  _handleFullScreenButtonClick() {
    const video = this._videoRef.current;

    video.requestFullscreen();
  }

  _handleExitButtonClick() {
    const {onPlayButtonCLick, onExitButtonClick, isPlaying} = this.props;

    if (isPlaying) {
      onPlayButtonCLick();
    }

    onExitButtonClick();
  }

  render() {
    const {movie, isPlaying, isLoading, currentTime, onTimeUpdate, onLoadingEnd} = this.props;
    const {videoUrl} = movie;

    return (
      <div className="player">
        <video
          ref={this._videoRef}
          autoPlay={isPlaying}
          className="player__video"
          poster="img/bg-the-grand-budapest-hotel.jpg"
          onLoadedMetadata={(evt) => {
            evt.preventDefault();
            this._movieDuration = this._videoRef.current.duration;
            onLoadingEnd();
          }}
          onTimeUpdate={(evt) => {
            evt.preventDefault();
            onTimeUpdate(this._videoRef.current.currentTime);
          }}
        >
          <source ref={this._sourceRef} src={videoUrl} type={generateVideoType(videoUrl)}/>
        </video>
        <PlayerExit
          onExitButtonClick = {this._handleExitButtonClick}
        />
        <PlayerControls
          isPlaying={isPlaying}
          isLoading={isLoading}
          duration={this._movieDuration}
          onPlayButtonClick={this._handlePlayButtonClick}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
          currentTime = {currentTime}
        />
      </div>
    );
  }
}

PlayerPage.propTypes = PlayerPageType;

const mapStateToProps = (state) => ({
  isPlaying: state.isPlayerPlaying
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonCLick() {
    dispatch(ActionCreator.startPlaying());
  }
});

export {PlayerPage};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
