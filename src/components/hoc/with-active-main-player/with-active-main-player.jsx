import React, {PureComponent} from "react";

const withActiveMainPlayer = (Component) => {
  class WithActiveMainPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        currentTime: 0
      };

      this._handleUpdateTime = this._handleUpdateTime.bind(this);
      this._handleLoadingEnd = this._handleLoadingEnd.bind(this);
    }

    _handleUpdateTime(newTime) {
      this.setState({
        currentTime: newTime
      });
    }

    _handleLoadingEnd() {
      this.setState({
        isLoading: !this.state.isLoading
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onTimeUpdate={this._handleUpdateTime}
          onLoadingEnd={this._handleLoadingEnd}
          isPlayerLoading={this.state.isLoading}
          currentTime={this.state.currentTime}
        />
      );
    }
  }

  WithActiveMainPlayer.propTypes = {};

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
