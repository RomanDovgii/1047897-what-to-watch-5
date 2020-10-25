import React from "react";
import {connect} from "react-redux";
import GenresListItem from "./genres-list-item";
import {optionalGenresType} from "../../types/types";
import {ActionCreator} from "../../../store/action";

const GenresList = (props) => {
  const {genres, selectedGenre, onGenreChange} = props;

  if (genres) {
    return (
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => {
          return (
            <GenresListItem
              key = {index.toString()}
              genre = {genre}
              onGenreChange = {onGenreChange}
              isSelected = {genre === selectedGenre ? true : false}
            />
          );
        })}
      </ul>
    );
  }

  return null;
};

GenresList.propTypes = optionalGenresType;

const mapStateToProps = (state) => {
  return {
    selectedGenre: state.selectedGenre,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(selectedGenre) {
    dispatch(ActionCreator.changeGenre(selectedGenre));
  }
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
