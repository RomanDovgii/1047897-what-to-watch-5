import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._showVideo = this._showVideo.bind(this);
      this._onMouseEnter = this._onMouseEnter.bind(this);
      this._onMouseLeave = this._onMouseLeave.bind(this);
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

    _onMouseEnter(evt) {
      evt.preventDefault();

      this._showVideo();
    }

    _onMouseLeave(evt) {
      evt.preventDefault();

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
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      />);
    }
  }

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
