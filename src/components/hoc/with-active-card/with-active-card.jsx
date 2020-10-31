import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {}

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
