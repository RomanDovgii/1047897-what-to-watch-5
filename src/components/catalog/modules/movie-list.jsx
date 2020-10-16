import React, {PureComponent} from "react";
import SmallMovieCard from "../../small-movie-card/small-movie-card";
import {moviesType} from "../../types/types";

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
              key = {`${movie.name.trim()}-${index}`}
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

MoviesList.propTypes = moviesType;

export default MoviesList;
