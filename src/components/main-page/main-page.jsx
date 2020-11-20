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

const MainPage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onLoadMovies, onPlayButtonClick, movies, genres, isLoading, onLoadCompletion} = props;

  useEffect(() => {
    if (isLoading) {
      onLoadMovies();
    }

    if (movies !== []) {
      onLoadCompletion();
    }
  }, [movies]);


  return !isLoading
    ? <React.Fragment>
      <MainPageMovieCard
        onUserIconClick = {onUserIconClick}
        onWTWLogoClick = {onWTWLogoClick}
        onPlayButtonClick = {onPlayButtonClick}
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
    </React.Fragment>
    : <LoadingPage/>;
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(url) {
    dispatch(redirectToRoute(url));
    dispatch(startPlaying());
  },
  onLoadMovies() {
    dispatch(fetchMovieList());
    dispatch(fetchPromotedMovie());
  }
});

const mapStateToProps = ({DATA}) => ({
  movies: filterMoviesByGenre(DATA),
  genres: DATA.genres,
});

MainPage.propTypes = mainPageType;

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
