import React from "react";
import {connect} from "react-redux";
import GenresListItem from "../genres-list-item/genres-list-item";
import {genresListType} from "../types/types";
import {resetShownMovies, changeGenre} from "../../store/actions/action";

const GenresList = (props) => {
  const {genres, selectedGenre, onGenreClick} = props;

  if (genres) {
    return (
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => {
          return (
            <GenresListItem
              key = {index.toString()}
              genre = {genre}
              onGenreClick = {onGenreClick}
              isSelected = {genre === selectedGenre ? true : false}
            />
          );
        })}
      </ul>
    );
  }

  return null;
};

GenresList.propTypes = genresListType;

const mapStateToProps = ({DATA}) => {
  return {
    selectedGenre: DATA.selectedGenre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(selectedGenre) {
    dispatch(resetShownMovies());
    dispatch(changeGenre(selectedGenre));
  }
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
