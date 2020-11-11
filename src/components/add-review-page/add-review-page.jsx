import React from "react";
import Header from "../header/header";
import AddReview from "./modules/add-review";
import MovieCardBackground from "./modules/movie-card-background";
import MoviePoster from "./modules/movie-poster";
import HeadingFirstLevel from "./modules/heading-first-level";
import {onUserIconClickType} from "../types/types";
import withActiveReviewForm from "../hoc/with-active-review-form/with-active-review-form";
import {connect} from "react-redux";
import {addComment} from "../../store/actions/api-actions";

const AddReviewWrapper = withActiveReviewForm(AddReview);

const HeaderSetting = {
  IS_USER_PAGE: false,
  IS_MY_LIST: false,
  IS_SIGN_IN: false,
  IS_NAVIGATION: true,
  IS_USER_BLOCK: true
};

const AddReviewPage = (props) => {

  const {onUserIconClick, onWTWLogoClick} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieCardBackground/>
        <HeadingFirstLevel/>
        <Header
          onUserIconClick = {onUserIconClick}
          onWTWLogoClick = {onWTWLogoClick}
          isUserPage = {HeaderSetting.IS_USER_PAGE}
          isMyList = {HeaderSetting.IS_MY_LIST}
          isSignIn = {HeaderSetting.IS_SIGN_IN}
          isNavigation = {HeaderSetting.IS_NAVIGATION}
          isUserBlock = {HeaderSetting.IS_USER_BLOCK}
        />
        <MoviePoster/>
      </div>

      <AddReviewWrapper/>
    </section>
  );
};

AddReviewPage.propTypes = onUserIconClickType;

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, commentLocal, raitingLocal) {
    const commentData = {
      comment: commentLocal,
      raiting: raitingLocal
    };

    dispatch(addComment(id, commentData));
  }
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
