import React, {useEffect} from "react";
import MainPageMovieCard from "../main-page-movie-card/main-page-movie-card";
import Footer from "../footer/footer";
import {mainPageType} from "../types/types";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant, CatalogCallSource} from "../../utils/const";
import {filterMoviesByGenre} from "../../store/selectors/genre-selector";
import {connect} from "react-redux";
import {redirectToRoute, startPlaying} from "../../store/actions/action";
import {fetchMovieList, fetchPromotedMovie} from "../../store/actions/api-actions";
import LoadingPage from "../loading-page/loading-page";
import Error from "../error/error";

const MainPage = (props) => {
  const {onUserIconClick, onWTWLogoClick, loadMovies, loadPromotedMovie, onPlayButtonClick, movies, genres, isLoading, onLoadCompletion, promotedMovie} = props;

  useEffect(() => {
    if (JSON.stringify(movies) === JSON.stringify([])) {
      loadMovies();
    }

    if (JSON.stringify(promotedMovie) === JSON.stringify({})) {
      loadPromotedMovie();
    }

    if (JSON.stringify(movies) !== JSON.stringify([]) && JSON.stringify(promotedMovie) !== JSON.stringify({})) {
      onLoadCompletion();
    }
  }, [movies, promotedMovie, isLoading]);


  return isLoading
    ? <LoadingPage/>
    : <React.Fragment>
      <MainPageMovieCard
        onUserIconClick = {onUserIconClick}
        onWTWLogoClick = {onWTWLogoClick}
        onPlayButtonClick = {onPlayButtonClick}
        movie = {promotedMovie}
      />
      <div className="page-content">
        <Catalog
          movies = {movies}
          genres = {genres}
          heading = {CatalogHeadingVariant.CATALOG}
          source = {CatalogCallSource.MAIN_PAGE}
        />
        <Footer/>
      </div>
      <Error/>
    </React.Fragment>;
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(url) {
    dispatch(redirectToRoute(url));
    dispatch(startPlaying());
  },
  loadMovies() {
    dispatch(fetchMovieList());
  },
  loadPromotedMovie() {
    dispatch(fetchPromotedMovie());
  }
});

const mapStateToProps = ({DATA}) => ({
  movies: filterMoviesByGenre(DATA),
  promotedMovie: DATA.promotedMovie,
  genres: DATA.genres,
});

MainPage.propTypes = mainPageType;

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
