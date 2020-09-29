import React from "react";
import GenresList from "./genres-list";
import MoviesList from "./movies-list";
import MoreButton from "./more-button";
import {catalogType} from "../../types/index";

const Catalog = (props) => {
  const catalog = props;

  return (
    <React.Fragment>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList
          genres = {catalog.genres}
        />
        <MoviesList
          movies = {catalog.movies}
        />
        <MoreButton/>
      </section>
    </React.Fragment>
  );
};

Catalog.propTypes = {
  catalog: catalogType
};

export default Catalog;
