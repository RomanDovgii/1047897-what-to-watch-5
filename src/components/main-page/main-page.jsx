import React from "react";
import MovieCardTop from "./modules/movie-card-top";
import Footer from "../footer/footer";
import {mainPageType} from "../types/types";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant, CatalogCallSource} from "../../utils/const";
import {filterMoviesByGenre} from "../../store/selectors/genre-selector";
import {connect} from "react-redux";

const MainPage = (props) => {
  const {onUserIconClick, onWTWLogoClick, onPlayButtonClick, movies, genres} = props;

  return (
    <React.Fragment>
      <MovieCardTop
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

const mapStateToProps = ({DATA}) => ({
  movies: filterMoviesByGenre(DATA),
  genres: DATA.genres,
});

MainPage.propTypes = mainPageType;

export {MainPage};
export default connect(mapStateToProps)(MainPage);
