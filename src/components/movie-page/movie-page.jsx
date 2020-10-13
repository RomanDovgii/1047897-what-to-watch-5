import React from "react";
import MovieCard from "./modules/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant} from "../../utils/const";
import {moviesType} from "../types/types";

const MoviePage = (props) => {
  const {movies} = props;

  return (
    <React.Fragment>
      <MovieCard/>

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

MoviePage.propTypes = moviesType;

export default MoviePage;
