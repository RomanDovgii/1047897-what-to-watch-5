import React from "react";
import {connect} from "react-redux";
import {flushError} from "../../store/actions/action";
import {errorType} from "../types/types";

const errorStyle = {
  ERROR: {
    paddingTop: `10px`,
    paddingRight: `10px`,
    paddingBottom: `20px`,
    paddingLeft: `10px`,
    width: `300px`,
    minHeight: `50px`,
    position: `fixed`,
    bottom: `0`,
    right: `30px`,
    backgroundImage: `linear-gradient(-180deg,#180202 0,#000 100%)`,
    boxShadow: `0px 0px 20px 2px #330233`,
    zIndex: `1000`,
    opacity: `0.9`
  },
  ERROR_HEADING: {
    margin: `0`,
    paddingRight: `20px`,
    fontSize: `30px`,
    color: `#ffffff`
  },
  ERROR_TEXT: {
    margin: `0`,
    paddingTop: `20px`,
    color: `#ffffff`
  },
  ERROR_CLOSE: {
    position: `absolute`,
    top: `10px`,
    right: `5px`,
    width: `30px`,
    height: `30px`,
    background: `none`,
    border: `none`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`
  },
  ERROR_CLOSE_BEFORE: {
    content: `\`\``,
    width: `4px`,
    height: `20px`,
    backgroundColor: `#ffffff`,
    position: `absolute`,
    borderRadius: `20px`,
    transform: `rotate(40deg)`
  },
  ERROR_CLOSE_AFTER: {
    content: `\`\``,
    width: `4px`,
    height: `20px`,
    backgroundColor: `#ffffff`,
    position: `absolute`,
    borderRadius: `20px`,
    transform: `rotate(-40deg)`
  },
  ERROR_CLOSE_TEXT: {
    position: `absolute !important`,
    clip: `rect(1px, 1px, 1px, 1px)`,
    padding: `0 !important`,
    border: `0 !important`,
    height: `1px !important`,
    width: `1px !important`,
    overflow: `hidden`
  },
};

const Error = (props) => {
  const {error, isError, onCloseButtonClick} = props;
  const {heading = `Error Unknown`, text = `We don't know what happened. If it doesn't bark, doesn't spread seeds or communism, and doesn't try to kill you, then just ignore it. It isn't important.`} = error;

  return (
    <React.Fragment>
      {isError &&
        <div style={errorStyle.ERROR}>
          <h6 style={errorStyle.ERROR_HEADING}>{heading}</h6>
          <p style={errorStyle.ERROR_TEXT}>
            {text}
          </p>
          <button className="error__close" style={errorStyle.ERROR_CLOSE} onClick={onCloseButtonClick}>
            <div style={errorStyle.ERROR_CLOSE_BEFORE}/>
            <div style={errorStyle.ERROR_CLOSE_AFTER}/>
            <p style={errorStyle.ERROR_CLOSE_TEXT}>Close popup</p>
          </button>
        </div>}
    </React.Fragment>
  );
};

Error.propTypes = errorType;

const mapStateToProps = ({STATE}) => ({
  isError: STATE.isError,
  error: STATE.error
});

const mapDispatchToProps = (dispatch) => ({
  onCloseButtonClick() {
    dispatch(flushError());
  }
});

export {Error};
export default connect(mapStateToProps, mapDispatchToProps)(Error);
