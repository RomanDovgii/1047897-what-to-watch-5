import React, {createRef, useEffect} from "react";
import {generateVideoType} from "../../utils/utils";
import {withActivePlayerType} from "../../components/types/types";

const withActivePlayer = (Component) => {
  const WithActivePlayer = (props) => {
    const {imageName, videoUrl, isPlaying} = props;

    const videoRef = createRef();

    useEffect(() => {
      const video = videoRef.current;

      video.src = videoUrl;
      video.type = generateVideoType(videoUrl);

      if (isPlaying) {
        video.oncanplaythrough = () => {
          video.play();
        };
      } else {
        video.pause();
        video.src = ``;
        video.type = ``;
      }

      return () => {
        video.oncanplaythrough = null;
      };
    }, [isPlaying]);

    return (
      <Component>
        <video
          autoPlay="autoplay"
          className="player__video"
          ref={videoRef}
          poster={imageName}
          muted
        />
      </Component>
    );
  };

  WithActivePlayer.propTypes = withActivePlayerType;

  return WithActivePlayer;
};

export default withActivePlayer;
