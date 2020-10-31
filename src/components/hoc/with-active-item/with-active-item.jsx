import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {}

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
