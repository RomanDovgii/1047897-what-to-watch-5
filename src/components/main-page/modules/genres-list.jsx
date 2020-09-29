import React from "react";
import GenresListItem from "./genres-list-item";
import {listType} from "../../types/types";

const GenresList = (props) => {
  const {genres} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
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

GenresList.propTypes = listType;

export default GenresList;
