import React, {createRef, useEffect, useState} from "react";
import {generateVideoType} from "../../utils/utils";
import {movieType} from "../../components/types/types";

const withActivePlayer = (Component) => {
  const WithActivePlayer = (props) => {
    const {movie} = props;
    const {previewImage, previewVideoLink} = movie;
    const [isRendered, changeIsRendered] = useState(false);

    const videoRef = createRef();

    useEffect(() => {
      const video = videoRef.current;

      switch (true) {
        case isRendered && video !== null:
          video.oncanplaythrough = () => {
            if (isRendered) {
              video.play();
            } else {
              video.pause();
              video.src = ``;
            }
          };
          break;
      }
    }, [isRendered]);

    return (
      <Component
        {...props}
        renderPlayer = {changeIsRendered}
      >
        {
          isRendered
            ? <video
              className="player__video"
              ref={videoRef}
              poster={previewImage}
              src={previewVideoLink}
              typeof={generateVideoType(previewVideoLink)}
              style={{zIndex: `99`}}
              muted
            />
            : null
        }

      </Component>
    );
  };

  WithActivePlayer.propTypes = movieType;

  return WithActivePlayer;
};

export default withActivePlayer;
