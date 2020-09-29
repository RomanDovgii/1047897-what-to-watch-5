import React from "react";
import {genresListItemType} from "../../types/index";

const GenresListItem = (props) => {
  const genresListItem = props;

  const activeClass = (genresListItem.genre === `All genres`) ? ` catalog__genres-item--active` : ``;

  return (
    <li className={`catalog__genres-item` + activeClass}>
      <a href="#" className="catalog__genres-link">{genresListItem.genre}</a>
    </li>
  );
};

GenresListItem.propTypes = {
  genresListItem: genresListItemType
};

export default GenresListItem;
