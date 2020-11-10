import React from "react";
import GenresList from "./modules/genres-list";
import MoviesList from "./modules/movie-list";
import MoreButton from "./modules/more-button";
import CatalogHeading from "./modules/catalog-heading";
import {catalogType} from "../types/types";
import {connect} from "react-redux";
import {showMore} from "../../store/actions/action";

const Catalog = (props) => {
  const {heading, movies, shownMoviesCount, genres = [], onMoreButtonClick} = props;

  const moviesCount = movies.length;

  return (
    <section className="catalog">
      <CatalogHeading
        heading = {heading}
      />

      {
        genres.length ?
          <GenresList
            genres = {genres}
          /> :
          ``
      }

      <MoviesList
        movies = {movies.slice(0, shownMoviesCount)}
      />

      {shownMoviesCount <= moviesCount &&
      <MoreButton
        moviesCount = {moviesCount}
        heading = {heading}
        onMoreButtonClick = {onMoreButtonClick}
      />}
    </section>
  );
};

Catalog.propTypes = catalogType;

const mapStateToProps = ({STATE}) => ({
  shownMoviesCount: STATE.shownMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onMoreButtonClick() {
    dispatch(showMore());
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
