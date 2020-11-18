import React from "react";
import {connect} from "react-redux";
import {redirectToRoute} from "../../store/actions/action";
import {isRenderedType} from "../types/types";

const HeaderNavigation = (props) => {
  const {isRendered, onMovieLinkClick, movie} = props;

  if (isRendered) {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a
              href="#"
              className="breadcrumbs__link"
              onClick={(evt) => {
                evt.preventDefault();

                onMovieLinkClick(movie);
              }}
            >{movie.name}</a>
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

HeaderNavigation.propTypes = isRenderedType;

const mapDispatchToProps = (dispatch) => ({
  onMovieLinkClick(movie) {
    dispatch(redirectToRoute(`/films/${movie.id}`));
  }
});

const mapStateToProps = ({DATA}) => ({
  movie: DATA.selectedMovie
});

export {HeaderNavigation};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigation);
