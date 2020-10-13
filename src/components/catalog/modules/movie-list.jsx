import React, {PureComponent} from "react";
import SmallMovieCard from "../../small-movie-card/small-movie-card";
import {listType} from "../../types/types";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => {
          return (
            <SmallMovieCard
              key = {`${movie.name.trim()}-${index.toString()}`}
              onMouseEnter = {(movieLocal) => {
                this.setState({movie: movieLocal});
              }}
              onMouseLeave = {() => {
                this.setState({movie: {}});
              }}
              movie = {movie}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = listType;

export default MoviesList;
