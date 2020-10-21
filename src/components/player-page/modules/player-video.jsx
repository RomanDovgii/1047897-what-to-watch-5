import React from "react";

const PlayerVideo = () => {
  return (
    <video autoPlay="autoplay" className="player__video" poster="img/player-poster.jpg">
      <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm" type="video/webm"/>
    </video>
  );
};

export default PlayerVideo;
