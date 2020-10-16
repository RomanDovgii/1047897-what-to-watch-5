import React from "react";
import MovieCardTop from "./modules/movie-card-top";
import Footer from "../footer/footer";
import {mainPageType} from "../types/types";
import {GENRES} from "../../utils/const";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant} from "../../utils/const";

const MainPage = (props) => {
  const {onUserIconClick, onPlayButtonClick, promotedMovie, movies} = props;

  return (
    <React.Fragment>
      <MovieCardTop
        onUserIconClick = {onUserIconClick}
        onPlayButtonClick = {onPlayButtonClick}
        movie = {promotedMovie}
      />
      <div className="page-content">
        <Catalog
          heading = {CatalogHeadingVariant.CATALOG}
          movies = {movies}
          genres = {GENRES}
        />
        <Footer/>
      </div>
    </React.Fragment>

  );
};

MainPage.propTypes = mainPageType;

export default MainPage;
