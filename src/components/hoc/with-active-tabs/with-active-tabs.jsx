import React, {PureComponent} from "react";

const withActiveTabs = (Component) => {
  class WithActiveTabs extends PureComponent {}

  WithActiveTabs.propTypes = {};

  return WithActiveTabs;
};

export default withActiveTabs;
