import React, {PureComponent} from "react";
import GenresList from "./modules/genres-list";
import MoviesList from "./modules/movie-list";
import MoreButton from "./modules/more-button";
import CatalogHeading from "./modules/catalog-heading";
import {catalogType} from "../types/types";
import {CatalogHeadingVariant} from "../../utils/const";

class Catalog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      element: {}
    };
  }

  render() {
    const {heading, genres, movies} = this.props;

    let moviesLocal = (heading !== CatalogHeadingVariant.MOVIE_PAGE) ? movies : movies.slice(1, 5);

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
  }
}

Catalog.propTypes = catalogType;

export default Catalog;
