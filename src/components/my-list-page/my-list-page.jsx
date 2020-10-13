import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant} from "../../utils/const";
import {moviesType} from "../types/types";

const HeaderSetting = {
  IS_USER_PAGE: true,
  IS_MY_LIST: true,
  IS_SIGN_IN: false,
  IS_NAVIGATION: false,
  IS_USER_BLOCK: true
};

const MyListPage = (props) => {
  const {movies} = props;

  const filteredMovies = movies.filter((movie) => movie.isMyList);

  return (
    <div className="user-page">
      <Header
        isUserPage = {HeaderSetting.IS_USER_PAGE}
        isMyList = {HeaderSetting.IS_MY_LIST}
        isSignIn = {HeaderSetting.IS_SIGN_IN}
        isNavigation = {HeaderSetting.IS_NAVIGATION}
        isUserBlock = {HeaderSetting.IS_USER_BLOCK}
      />
      <Catalog
        heading = {CatalogHeadingVariant.CATALOG}
        movies = {filteredMovies}
      />
      <Footer/>
    </div>
  );
};

MyListPage.propTypes = moviesType;

export default MyListPage;
