import React, {PureComponent} from "react";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {}

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
