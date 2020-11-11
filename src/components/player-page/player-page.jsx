import React, {createRef, PureComponent} from "react";
import PlayerExit from "./modules/player-exit";
import PlayerControls from "./modules/player-controls";
import {playerPageType} from "../types/types";
import {connect} from "react-redux";
import {startPlaying} from "../../store/actions/action";
import {fetchSelectedMovie} from "../../store/actions/api-actions";
import {generateVideoType} from "../../utils/utils";

class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this._isLoaded = false;

    this._videoRef = createRef();
    this._sourceRef = createRef();
    this._movieDuration = 0;

    this._id = window.location.pathname.slice(8);

    this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    this._handleExitButtonClick = this._handleExitButtonClick.bind(this);
  }

  componentDidMount() {
    const {fetchMovie} = this.props;
    const video = this._videoRef.current;

    fetchMovie(this._id);

    if (this._isLoaded) {
      video.onloadedmetadata = () => {
        this._movieDuration = video.duration;
      };
    }
    this._isLoaded = true;
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
    const {videoLink, backgroundImage, name} = movie;

    return (
      <div className="player">
        {this._isLoaded
          ? <video
            ref={this._videoRef}
            autoPlay={isPlaying}
            className="player__video"
            poster={backgroundImage}
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
            <source ref={this._sourceRef} src={videoLink} type={generateVideoType(videoLink)}/>
          </video>
          : null
        }
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
          movieName = {name}
        />
      </div>
    );
  }
}

PlayerPage.propTypes = playerPageType;

const mapStateToProps = ({STATE, DATA}) => ({
  isPlaying: STATE.isPlayerPlaying,
  movie: DATA.selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonCLick() {
    dispatch(startPlaying());
  },
  fetchMovie(id) {
    dispatch(fetchSelectedMovie(id));
  }
});

export {PlayerPage};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
