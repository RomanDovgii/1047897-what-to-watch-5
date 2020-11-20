import React, {createRef} from "react";
import {login} from "../../store/actions/api-actions";
import {connect} from "react-redux";
import {signInType} from "../types/types";

const LoginPageForm = (props) => {
  const {isError, onSubmit} = props;

  const emailRef = createRef();
  const passwordRef = createRef();

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={(evt) => {
        evt.preventDefault();

        const email = emailRef.current;
        const password = passwordRef.current;

        onSubmit({
          email: email.value,
          password: password.value
        });
      }}>
        {isError
          ? <div className="sign-in__message">
            <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
          </div>
          : null}
        <div className="sign-in__fields">
          <div className={`sign-in__field ${isError ? `sign-in__field--error` : ``}`}>
            <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={emailRef}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

LoginPageForm.propTypes = signInType;

const mapStateToProps = ({STATE}) => ({
  isError: STATE.isAuthError
});

const mapDispatchToProps = (dispatch) =>({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginPageForm};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPageForm);
