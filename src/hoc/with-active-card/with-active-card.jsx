import React, {useEffect, useState} from "react";
import {withActiveCardType} from "../../components/types/types";

const withActiveCard = (Component) => {
  const WithActiveCard = (props) => {
    const [isPlaying, changeIsPlaying] = useState(false);
    let timer;

    useEffect(() => {
      return () => {
        clearTimeout(timer);
      };
    });

    return (<Component
      {...props}
      isPlaying={isPlaying}
      onMouseEnter={() => {
        timer = setTimeout(
            () => {
              changeIsPlaying(true);
            },
            1000
        );
      }}
      onMouseLeave={() => {
        clearTimeout(timer);
        changeIsPlaying(false);
      }}
    />);
  };

  WithActiveCard.propTypes = withActiveCardType;

  return WithActiveCard;
};

export default withActiveCard;
