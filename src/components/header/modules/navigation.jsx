import React from "react";
import {optionalType} from "../../types/types";

const Navigation = (props) => {
  const {isRendered} = props;

  if (isRendered) {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>
    );
  }

  return null;
};

Navigation.propTypes = optionalType;

export default Navigation;
