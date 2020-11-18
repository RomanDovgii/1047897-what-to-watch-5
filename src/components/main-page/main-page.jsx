import React from "react";
import MainPageMovieCard from "../main-page-movie-card/main-page-movie-card";
import Footer from "../footer/footer";
import {mainPageType} from "../types/types";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant, CatalogCallSource} from "../../utils/const";
import {filterMoviesByGenre} from "../../store/selectors/genre-selector";
import {connect} from "react-redux";
import {redirectToRoute, startPlaying} from "../../store/actions/action";

const MainPage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, movies, genres} = props;

  return (
    <React.Fragment>
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

  );
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick(url) {
    dispatch(redirectToRoute(url));
    dispatch(startPlaying());
  }
});

const mapStateToProps = ({DATA}) => ({
  movies: filterMoviesByGenre(DATA),
  genres: DATA.genres,
});

MainPage.propTypes = mainPageType;

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
