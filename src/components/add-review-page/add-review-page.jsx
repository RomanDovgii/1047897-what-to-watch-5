import React from "react";
import Header from "../header/header";
import AddReview from "./modules/add-review";
import MovieCardBackground from "./modules/movie-card-background";
import MoviePoster from "./modules/movie-poster";
import HeadingFirstLevel from "./modules/heading-first-level";

const headerSettings = {
  IS_USER_PAGE: false,
  IS_MY_LIST: false,
  IS_SIGN_IN: false,
  IS_NAVIGATION: true,
  IS_USER_BLOCK: true
};

const AddReviewPage = () => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieCardBackground/>
        <HeadingFirstLevel/>
        <Header
          isUserPage = {headerSettings.IS_USER_PAGE}
          isMyList = {headerSettings.IS_MY_LIST}
          isSignIn = {headerSettings.IS_SIGN_IN}
          isNavigation = {headerSettings.IS_NAVIGATION}
          isUserBlock = {headerSettings.IS_USER_BLOCK}
        />
        <MoviePoster/>
      </div>

      <AddReview/>
    </section>
  );
};

export default AddReviewPage;
