import React, {createRef, useEffect} from "react";
import {useParams} from "react-router-dom";
import PlayerPageExit from "../player-page-exit/player-page-exit";
import PlayerPageControls from "../player-page-controls/player-page-controls";
import {playerPageType} from "../types/types";
import {connect} from "react-redux";
import {startPlaying, changeGenre} from "../../store/actions/action";
import {fetchSelectedMovie} from "../../store/actions/api-actions";
import {generateVideoType} from "../../utils/utils";
import {ALL_GENRE} from "../../utils/const";
import LoadingPage from "../loading-page/loading-page";
import Error from "../error/error";

const PlayerPage = (props) => {
  const {selectedMovie, isPlaying, isPlayerLoading, currentTime, onTimeUpdate, onLoadingEnd, isLoading, onPlayButtonClick, onExitButtonClick, resetMovieGenre, fetchMovie, onLoadCompletion, duration} = props;
  const {videoLink, backgroundImage, name} = selectedMovie;
  const videoRef = createRef();
  const id = useParams().id;

  useEffect(() => {
    if (JSON.stringify(selectedMovie) === JSON.stringify({})) {
      fetchMovie(id);
    }

    if (JSON.stringify(selectedMovie) !== JSON.stringify({})) {
      onLoadCompletion();
    }
  }, [selectedMovie, isLoading, isPlayerLoading]);

  return (
    <div className="player">
      {!isLoading
        ? <video
          ref={videoRef}
          autoPlay={isPlaying}
          className="player__video"
          poster={backgroundImage}
          src={videoLink}
          type={generateVideoType(videoLink)}
          onLoadedMetadata={(evt) => {
            evt.preventDefault();
            onLoadingEnd(videoRef.current.duration);
          }}
          onTimeUpdate={(evt) => {
            evt.preventDefault();
            onTimeUpdate(videoRef.current.currentTime);
          }}
        >
        </video>
        : <LoadingPage></LoadingPage>
      }
      <PlayerPageExit
        onExitButtonClick = {() => {
          if (isPlaying) {
            onPlayButtonClick();
          }

          resetMovieGenre(ALL_GENRE);
          onExitButtonClick();
        }}
      />
      <PlayerPageControls
        isPlaying={isPlaying}
        isLoading={isPlayerLoading}
        duration={duration}
        onPlayButtonClick={() => {
          const video = videoRef.current;

          if (isPlaying) {
            video.pause();
          } else {
            video.play();
          }

          onPlayButtonClick();
        }}
        onFullScreenButtonClick={() => {
          const video = videoRef.current;

          video.requestFullscreen();
        }}
        currentTime = {currentTime}
        movieName = {name}
      />
      <Error/>
    </div>
  );
};

PlayerPage.propTypes = playerPageType;

const mapStateToProps = ({STATE, DATA}) => ({
  isPlaying: STATE.isPlayerPlaying,
  selectedMovie: DATA.selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(startPlaying());
  },
  fetchMovie(id) {
    dispatch(fetchSelectedMovie(id));
  },
  resetMovieGenre(selectedGenre) {
    dispatch(changeGenre(selectedGenre));
  }
});

export {PlayerPage};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
