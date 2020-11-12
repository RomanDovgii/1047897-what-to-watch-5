import React, {PureComponent} from "react";

const withLoading = (Component) => {
  class WithLoading extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      };

      this._handleLoadingCompletion = this._handleLoadingCompletion.bind(this);
    }

    _handleLoadingCompletion() {
      this.setState({
        isLoading: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isLoading = {this.state.isLoading}
          onLoadCompletion = {this._handleLoadingCompletion}
        />
      );
    }
  }

  WithLoading.propTypes = {};

  return WithLoading;
};

export default withLoading;
