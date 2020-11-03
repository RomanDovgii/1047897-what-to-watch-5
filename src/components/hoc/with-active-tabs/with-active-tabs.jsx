import React, {PureComponent} from "react";
import {MovieScreenTab} from "../../../utils/const";
import {withActiveTabsType} from "../../types/types";

const withActiveTabs = (Component) => {
  class WithActiveTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        shownScreen: MovieScreenTab.OVERVIEW
      };

      this._onTabClick = this._onTabClick.bind(this);
    }

    _onTabClick(value) {
      this.setState({
        shownScreen: value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          shownScreen={this.state.shownScreen}
          onTabClick={this._onTabClick}
        />
      );
    }
  }

  WithActiveTabs.propTypes = withActiveTabsType;

  return WithActiveTabs;
};

export default withActiveTabs;
