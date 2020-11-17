import React, {PureComponent} from "react";
import {withActiveCardType} from "../../types/types";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._showVideo = this._showVideo.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    _showVideo() {
      this.timer = setTimeout(
          () => {
            this.setState({
              isPlaying: true
            });
          },
          1000
      );
    }

    _handleMouseEnter() {
      this._showVideo();
    }

    _handleMouseLeave() {
      clearTimeout(this.timer);

      this.setState({
        isPlaying: false
      });
    }

    render() {
      const isPlaying = this.state.isPlaying;

      return (<Component
        {...this.props}
        isPlaying={isPlaying}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      />);
    }
  }

  WithActiveCard.propTypes = withActiveCardType;

  return WithActiveCard;
};

export default withActiveCard;
