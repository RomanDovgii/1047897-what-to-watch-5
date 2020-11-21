import React, {createRef, useEffect, useState} from "react";
import {generateVideoType} from "../../utils/utils";
import {withActivePlayerType} from "../../components/types/types";

const withActivePlayer = (Component) => {
  const WithActivePlayer = (props) => {
    const {imageName, videoUrl, isPlaying} = props;
    const [isLoading, changeIsLoading] = useState(true);

    const videoRef = createRef();

    useEffect(() => {
      const video = videoRef.current;

      changeIsLoading(false);
      switch (true) {
        case isPlaying && !isLoading:
          video.src = videoUrl;
          video.type = generateVideoType(videoUrl);
          video.oncanplaythrough = () => {
            video.play();
          };
          break;
        case !isPlaying && !isLoading:
          video.pause();
          video.src = ``;
          video.type = ``;
          break;
      }

      return () => {
        changeIsLoading(true);
        video.oncanplaythrough = null;
      };
    }, [isPlaying]);

    return (
      <Component>
        <video
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
