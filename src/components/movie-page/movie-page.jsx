import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import MoviePageMovieCard from "../movie-page-movie-card/movie-page-movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant, CatalogCallSource, MoreLikeThis} from "../../utils/const";
import {moviePageType} from "../types/types";
import withActiveTabs from "../../hoc/with-active-tabs/with-active-tabs";
import withLoading from "../../hoc/with-loading/with-loading";
import {filterMoviesByGenre} from "../../store/selectors/genre-selector";
import {redirectToRoute, startPlaying} from "../../store/actions/action";
import {fetchSelectedMovie, fetchSelectedMovieComments, addMovieToFavorite} from "../../store/actions/api-actions";

const MovieCardWrapper = withLoading(withActiveTabs(MoviePageMovieCard));

const MoviePage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, selectedMovie, movies, comments, fetchMovie, isAuth, onMyListClick} = props;

  const {id} = useParams();

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
        isAuth = {isAuth}
        onMyListClick = {onMyListClick}
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

const mapStateToProps = ({DATA, USER}) => ({
  selectedMovie: DATA.selectedMovie,
  movies: filterMoviesByGenre(DATA),
  comments: DATA.comments,
  isAuth: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie(id) {
    dispatch(fetchSelectedMovie(id));
    dispatch(fetchSelectedMovieComments(id));
  },
  onMyListClick(id, status) {
    dispatch(addMovieToFavorite(id, status));
  },
  onPlayButtonClick(url) {
    dispatch(redirectToRoute(url));
    dispatch(startPlaying());
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
