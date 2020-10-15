import React from "react";
import GenresList from "./modules/genres-list";
import MoviesList from "./modules/movie-list";
import MoreButton from "./modules/more-button";
import CatalogHeading from "./modules/catalog-heading";
import {catalogType} from "../types/types";
import {CatalogHeadingVariant, MoreLikeThis} from "../../utils/const";

const Catalog = (props) => {
  const {heading, genres, movies} = props;

  const moviesLocal = (heading !== CatalogHeadingVariant.MOVIE_PAGE) ? movies : movies.slice(MoreLikeThis.FIRST_INDEX, MoreLikeThis.LAST_INDEX);

  return (
    <section className="catalog">
      <CatalogHeading
        heading = {heading}
      />
      <GenresList
        genres = {genres}
      />
      <MoviesList
        movies = {moviesLocal}
      />
      <MoreButton
        movies = {moviesLocal}
        heading = {heading}
      />
    </section>
  );
};

Catalog.propTypes = catalogType;

export default Catalog;
