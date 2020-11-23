import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import MoviePageMovieCard from "../movie-page-movie-card/movie-page-movie-card";
import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";
import {CatalogHeadingVariant, CatalogCallSource, MoreLikeThis, AppRoute} from "../../utils/const";
import {moviePageType} from "../types/types";
import withActiveTabs from "../../hoc/with-active-tabs/with-active-tabs";
import withLoading from "../../hoc/with-loading/with-loading";
import {filterMoviesByGenre} from "../../store/selectors/genre-selector";
import {redirectToRoute, startPlaying} from "../../store/actions/action";
import {fetchSelectedMovie, fetchSelectedMovieComments, fetchMovieList, addMovieToFavorite} from "../../store/actions/api-actions";
import Error from "../error/error";
import LoadingPage from "../loading-page/loading-page";

const MovieCardWrapper = withLoading(withActiveTabs(MoviePageMovieCard));

const MoviePage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, selectedMovie, movies, comments, fetchMovie, fetchComments, isAuth, onMyListClick, isLoading, onLoadCompletion, onMyListClickNonAuth} = props;

  const {id} = useParams();

  useEffect(() => {
    if (!isLoading) {
      fetchComments(id);
    }

    if (JSON.stringify(selectedMovie) === JSON.stringify({})) {
      fetchMovie(id);
    }

    if (JSON.stringify(selectedMovie) !== JSON.stringify({})) {
      onLoadCompletion();
    }
  }, [selectedMovie, isLoading]);

  return (
    !isLoading
      ? <React.Fragment>
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
          onMyListClickNonAuth = {onMyListClickNonAuth}
        />

        <div className="page-content">
          <Catalog
            heading = {CatalogHeadingVariant.MOVIE_PAGE}
            movies = {movies.slice(MoreLikeThis.FIRST_INDEX, MoreLikeThis.LAST_INDEX)}
            source = {CatalogCallSource.MOVIE_PAGE}
          />
          <Footer/>
        </div>
        <Error/>
      </React.Fragment>
      : <LoadingPage/>
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
    dispatch(fetchMovieList());
  },
  fetchComments(id) {
    dispatch(fetchSelectedMovieComments(id));
  },
  onMyListClick(id, status) {
    dispatch(addMovieToFavorite(parseInt(id, 10), status));
  },
  onPlayButtonClick(url) {
    dispatch(redirectToRoute(url));
    dispatch(startPlaying());
  },
  onMyListClickNonAuth() {
    dispatch(redirectToRoute(AppRoute.SIGN_IN));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
