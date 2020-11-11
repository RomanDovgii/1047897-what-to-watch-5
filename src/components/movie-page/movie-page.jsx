import React from "react";
import {connect} from "react-redux";
import MovieCard from "./modules/movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant, CatalogCallSource, MoreLikeThis} from "../../utils/const";
import {moviePageType} from "../types/types";
import withActiveTabs from "../hoc/with-active-tabs/with-active-tabs";
import {filterMoviesByGenre} from "../../store/selectors/genre-selector";
import {fetchSelectedMovie} from "../../store/actions/api-actions";

const MovieCardWrapper = withActiveTabs(MovieCard);

const MoviePage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, selectedMovie, movies, comments, fetchMovie} = props;

  const id = window.location.pathname.slice(7, 8);

  return (
    <React.Fragment>
      <MovieCardWrapper
        onUserIconClick = {onUserIconClick}
        onWTWLogoClick = {onWTWLogoClick}
        onPlayButtonClick = {onPlayButtonClick}
        selectedMovie={selectedMovie}
        comments = {comments}
        id = {id}
        fetchMovie = {fetchMovie}
      />

      <div className="page-content">
        <Catalog
          heading = {CatalogHeadingVariant.MOVIE_PAGE}
          movies = {movies.slice(MoreLikeThis.FIRST_INDEX, MoreLikeThis.LAST_INDEX)}
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
  movies: filterMoviesByGenre(DATA)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie(id) {
    dispatch(fetchSelectedMovie(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
