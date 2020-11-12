import React from "react";
import {connect} from "react-redux";
import {isRenderedType} from "../../types/types";

const Navigation = (props) => {
  const {isRendered, movie} = props;

  if (isRendered) {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="movie-page.html" className="breadcrumbs__link">{movie.name}</a>
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

Navigation.propTypes = isRenderedType;

const mapStateToProps = ({DATA}) => ({
  movie: DATA.selectedMovie
});

export {Navigation};
export default connect(mapStateToProps)(Navigation);
