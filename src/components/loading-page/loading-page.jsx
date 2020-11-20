import React from "react";

const loadingSectionStyle = {
  backgroundImage: `linear-gradient(-180deg,#180202 0,#000 100%)`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  position: `absolute`,
  top: `0`,
  left: `0`,
  width: `100%`,
  height: `100vh`
};

const loadingTextStyle = {
  color: `#ffffff`,
  fontSize: `100px`
};

const LoadingPage = () => {
  return (
    <section style={loadingSectionStyle}>
      <p style={loadingTextStyle}>
        Loading...
      </p>
    </section>
  );
};

export default LoadingPage;
