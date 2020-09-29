import React from "react";
import {genresListItemType} from "../../types/index";

const GenresListItem = (props) => {
  const {genre} = props;

  const activeClass = (genre === `All genres`) ? ` catalog__genres-item--active` : ``;

  return (
    <li className={`catalog__genres-item` + activeClass}>
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

GenresListItem.propTypes = genresListItemType.isRequired;

export default GenresListItem;
