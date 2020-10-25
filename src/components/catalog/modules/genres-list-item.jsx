import React from "react";
import {optionalGenreType} from "../../types/types";

const GenresListItem = (props) => {
  const {genre, onGenreChange, isSelected} = props;

  const activeClass = isSelected ? ` catalog__genres-item--active` : ``;

  return (
    <li className={`catalog__genres-item` + activeClass}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick = {(evt) => {
          evt.preventDefault();

          onGenreChange(genre);
        }}
      >{genre}</a>
    </li>
  );
};

GenresListItem.propTypes = optionalGenreType;

export default GenresListItem;
