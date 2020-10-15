import React from "react";
import MovieCard from "./modules/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant} from "../../utils/const";
import {mainPageType} from "../types/types";

const MoviePage = (props) => {
  const {onUserIconClick, onPlayButtonClick, promotedMovie, movies} = props;

  return (
    <React.Fragment>
      <MovieCard
        onUserIconClick = {onUserIconClick}
        onPlayButtonClick = {onPlayButtonClick}
        promotedMovie={promotedMovie}
      />

      <div className="page-content">
        <Catalog
          heading = {CatalogHeadingVariant.MOVIE_PAGE}
          movies = {movies}
        />
        <Footer/>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = mainPageType;

export default MoviePage;
