import React, {useState} from "react";

const withLoading = (Component) => {
  const WithLoading = (props) => {
    const [isLoading, changeIsLoading] = useState(true);

    return (
      <Component
        {...props}
        isLoading = {isLoading}
        onLoadCompletion = {() => {
          changeIsLoading(false);
        }}
      />
    );
  };

  WithLoading.propTypes = {};

  return WithLoading;
};

export default withLoading;
