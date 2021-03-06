import React from "react";
import {genreListItemType} from "../types/types";

const GenresListItem = (props) => {
  const {genre, onGenreClick, isSelected} = props;

  const activeClass = isSelected ? ` catalog__genres-item--active` : ``;

  return (
    <li className={`catalog__genres-item` + activeClass}>
      <a
        href="#"
        className="catalog__genres-link"
        onClick = {(evt) => {
          evt.preventDefault();

          if (!isSelected) {
            onGenreClick(genre);
          }
        }}
      >{genre}</a>
    </li>
  );
};

GenresListItem.propTypes = genreListItemType;

export default GenresListItem;
