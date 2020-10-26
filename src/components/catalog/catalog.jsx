import React from "react";
import GenresList from "./modules/genres-list";
import MoviesList from "./modules/movie-list";
import MoreButton from "./modules/more-button";
import CatalogHeading from "./modules/catalog-heading";
import {catalogType} from "../types/types";
import {CatalogHeadingVariant, MoreLikeThis} from "../../utils/const";
import {createGenresList} from "../../utils/utils";

const Catalog = (props) => {
  const {heading, movies} = props;

  const genres = createGenresList(movies);

  const moviesLocal = (heading !== CatalogHeadingVariant.MOVIE_PAGE) ? movies : movies.slice(MoreLikeThis.FIRST_INDEX, MoreLikeThis.LAST_INDEX);

  return (
    <section className="catalog">
      <CatalogHeading
        heading = {heading}
      />
      <GenresList
        genres = {genres}
      />
      <MoviesList/>
      <MoreButton
        movies = {moviesLocal}
        heading = {heading}
      />
    </section>
  );
};

Catalog.propTypes = catalogType;

export default Catalog;
