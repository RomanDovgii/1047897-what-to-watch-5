import React, {useEffect, useState} from "react";

const withActiveMainPlayer = (Component) => {
  const WithActiveMainPlayer = (props) => {
    const [isLoading, changeIsLoading] = useState(true);
    const [currentTime, changeCurrentTime] = useState(0);

    useEffect(() => {
      return () => {
        changeIsLoading(true);
        changeCurrentTime(0);
      };
    }, []);

    return (
      <Component
        {...props}
        onTimeUpdate={(newTime) => {
          changeCurrentTime(newTime);
        }}
        onLoadingEnd={() => {
          changeIsLoading(false);
        }}
        isPlayerLoading={isLoading}
        currentTime={currentTime}
      />
    );
  };
  // class WithActiveMainPlayer extends PureComponent {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       isLoading: true,
  //       currentTime: 0
  //     };

  //     this._handleUpdateTime = this._handleUpdateTime.bind(this);
  //     this._handleLoadingEnd = this._handleLoadingEnd.bind(this);
  //   }

  //   _handleUpdateTime(newTime) {
  //     this.setState({
  //       currentTime: newTime
  //     });
  //   }

  //   _handleLoadingEnd() {
  //     this.setState({
  //       isLoading: !this.state.isLoading
  //     });
  //   }

  //   render() {
  //     return (
  //       <Component
  //         {...this.props}
  //         onTimeUpdate={this._handleUpdateTime}
  //         onLoadingEnd={this._handleLoadingEnd}
  //         isPlayerLoading={this.state.isLoading}
  //         currentTime={this.state.currentTime}
  //       />
  //     );
  //   }
  // }

  WithActiveMainPlayer.propTypes = {};

  return WithActiveMainPlayer;
};

export default withActiveMainPlayer;
