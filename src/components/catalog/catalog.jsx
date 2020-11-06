import React from "react";
import GenresList from "./modules/genres-list";
import MoviesList from "./modules/movie-list";
import MoreButton from "./modules/more-button";
import CatalogHeading from "./modules/catalog-heading";
import {catalogType} from "../types/types";
import {MoreLikeThis, CatalogCallSource} from "../../utils/const";
import {connect} from "react-redux";
import {showMore} from "../../store/actions/action";

const Catalog = (props) => {
  const {heading, movies, shownMoviesCount, genres, source, onMoreButtonClick} = props;

  let moviesLocal;

  switch (source) {
    case CatalogCallSource.MY_LIST:
      moviesLocal = movies.filter((movie) => movie.isMyList);
      break;
    case CatalogCallSource.MOVIE_PAGE:
      moviesLocal = movies.slice(MoreLikeThis.FIRST_INDEX, MoreLikeThis.LAST_INDEX);
      break;
    default:
      moviesLocal = movies;
      break;
  }

  const moviesCount = moviesLocal.length;

  moviesLocal = moviesLocal.slice(0, shownMoviesCount);

  return (
    <section className="catalog">
      <CatalogHeading
        heading = {heading}
      />

      {
        source === CatalogCallSource.MAIN_PAGE ?
          <GenresList
            genres = {genres}
          /> :
          ``
      }

      <MoviesList
        source = {source}
        movies = {moviesLocal}
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

const mapStateToProps = (state) => ({
  movies: state.movieCards,
  genres: state.genres,
  shownMoviesCount: state.shownMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onMoreButtonClick() {
    dispatch(showMore());
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
