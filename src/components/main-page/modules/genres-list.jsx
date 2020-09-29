import React from "react";
import GenresListItem from "./genres-list-item";
import {genresListType} from "../../types/index";

const GenresList = (props) => {
  const genresList = props;

  return (
    <ul className="catalog__genres-list">
      {genresList.genres.map((genre, index) => {
        return (
          <GenresListItem
            key = {index.toString()}
            genre = {genre}
          />
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genresList: genresListType
};

export default GenresList;
