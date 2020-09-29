import React from "react";
import PropTypes from "prop-types";
import GenresListItem from "./genres-list-item";

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

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenresList;
