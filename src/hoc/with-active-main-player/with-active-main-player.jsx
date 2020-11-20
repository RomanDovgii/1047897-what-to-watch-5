import React, {useEffect, useState} from "react";

const withActiveMainPlayer = (Component) => {
  const WithActiveMainPlayer = (props) => {
    const [isLoading, changeIsLoading] = useState(true);
    const [currentTime, changeCurrentTime] = useState(0);

    useEffect(() => {
      return () => {
        changeIsLoading(true);
        changeCurrentTime(0);
      };
    }, []);

    return (
      <Component
        {...props}
        onTimeUpdate={(newTime) => {
          changeCurrentTime(newTime);
        }}
        onLoadingEnd={() => {
          changeIsLoading(false);
        }}
        isPlayerLoading={isLoading}
        currentTime={currentTime}
      />
    );
  };

  WithActiveMainPlayer.propTypes = {};

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
