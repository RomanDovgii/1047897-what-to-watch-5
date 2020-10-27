import React from "react";
import MovieCard from "./modules/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant, CatalogCallSource} from "../../utils/const";
import {moviePageType} from "../types/types";

const MoviePage = (props) => {
  const {onUserIconClick, onPlayButtonClick, promotedMovie, movies, comments} = props;

  return (
    <React.Fragment>
      <MovieCard
        onUserIconClick = {onUserIconClick}
        onPlayButtonClick = {onPlayButtonClick}
        promotedMovie={promotedMovie}
        comments = {comments}
      />

      <div className="page-content">
        <Catalog
          heading = {CatalogHeadingVariant.MOVIE_PAGE}
          movies = {movies}
          source = {CatalogCallSource.MOVIE_PAGE}
        />
        <Footer/>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = moviePageType;

export default MoviePage;
