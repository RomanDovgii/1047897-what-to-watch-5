import React from "react";
import MovieCardTop from "./modules/movie-card-top";
import Footer from "../footer/footer";
import {moviesType} from "../types/types";
import {GENRES} from "../../utils/const";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant} from "../../utils/const";

const MainPage = (props) => {
  const {onPlayButtonClick, movies} = props;
  const [firstMovie, ...otherMovies] = movies;

  return (
    <React.Fragment>
      <MovieCardTop
        onPlayButtonClick = {onPlayButtonClick}
        movie = {firstMovie}
      />
      <div className="page-content">
        <Catalog
          heading = {CatalogHeadingVariant.CATALOG}
          movies = {otherMovies}
          genres = {GENRES}
        />
        <Footer/>
      </div>
    </React.Fragment>

  );
};

MainPage.propTypes = moviesType;

export default MainPage;
