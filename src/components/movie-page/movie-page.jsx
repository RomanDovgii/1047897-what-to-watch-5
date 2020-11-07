import React from "react";
import {connect} from "react-redux";
import MovieCard from "./modules/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant, CatalogCallSource} from "../../utils/const";
import {moviePageType} from "../types/types";
import withActiveTabs from "../hoc/with-active-tabs/with-active-tabs";

const MovieCardWrapper = withActiveTabs(MovieCard);

const MoviePage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, selectedMovie, movies, comments} = props;

  const localMovies = movies.filter((movie) => movie.genre === selectedMovie.genre);

  return (
    <React.Fragment>
      <MovieCardWrapper
        onUserIconClick = {onUserIconClick}
        onWTWLogoClick = {onWTWLogoClick}
        onPlayButtonClick = {onPlayButtonClick}
        selectedMovie={selectedMovie}
        comments = {comments}
      />

      <div className="page-content">
        <Catalog
          heading = {CatalogHeadingVariant.MOVIE_PAGE}
          movies = {localMovies}
          source = {CatalogCallSource.MOVIE_PAGE}
        />
        <Footer/>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = moviePageType;

const mapStateToProps = ({DATA}) => ({
  selectedMovie: DATA.selectedMovie,
  movies: DATA.movies
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
