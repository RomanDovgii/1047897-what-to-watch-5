import React, {useEffect, useState} from "react";

const withActiveMainPlayer = (Component) => {
  const WithActiveMainPlayer = (props) => {
    const [isLoading, changeIsLoading] = useState(true);
    const [duration, changeDuration] = useState(0);
    const [currentTime, changeCurrentTime] = useState(0);

    useEffect(() => {
      return () => {
        changeIsLoading(false);
        changeCurrentTime(0);
      };
    }, [isLoading, duration]);

    return (
      <Component
        {...props}
        onTimeUpdate={(newTime) => {
          changeCurrentTime(newTime);
        }}
        onLoadingEnd={(newDuration) => {
          changeIsLoading(false);
          changeDuration(newDuration);
        }}
        isPlayerLoading={isLoading}
        currentTime={currentTime}
        duration={duration}
      />
    );
  };

  WithActiveMainPlayer.propTypes = {};

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
