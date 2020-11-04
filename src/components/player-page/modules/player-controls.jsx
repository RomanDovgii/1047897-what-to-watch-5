import React from "react";

const HOURS_IN_SECONDS = 3600;
const MINUTES_IN_SECONDS = 60;
const ZERO = 0;

const PlayerControls = (props) => {
  const {onPlayButtonClick, onFullScreenButtonClick, isPlaying, duration, isLoading, currentTime} = props;

  const timeElapsed = duration - currentTime;
  const hours = timeElapsed > HOURS_IN_SECONDS ? Math.floor((timeElapsed / HOURS_IN_SECONDS)) : ZERO;
  const minutes = timeElapsed > MINUTES_IN_SECONDS ? Math.floor(((timeElapsed - timeElapsed * hours) / MINUTES_IN_SECONDS)) : ZERO;
  const seconds = Math.floor(timeElapsed - timeElapsed * hours - timeElapsed * minutes);

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={duration > 0 ? ((currentTime / duration) * 100) : ZERO} max="100"></progress>
          <div
            className="player__toggler"
            style={{left: `${(currentTime / duration) * 100}%`}}
          >Toggler</div>
        </div>
        <div className="player__time-value">{isLoading ? `loading` : `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
      </div>

      <div className="player__controls-row">
        <button
          type="button"
          className="player__play"
          onClick={(evt) => {
            evt.preventDefault();
            onPlayButtonClick();
          }}
        >
          {isPlaying
            ? <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"/>
            </svg>
            : <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>}
          <span>{isPlaying ? `Pause` : `Play`}</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button
          type="button"
          className="player__full-screen"
          onClick={(evt) => {
            evt.preventDefault();
            onFullScreenButtonClick();
          }}
        >
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
