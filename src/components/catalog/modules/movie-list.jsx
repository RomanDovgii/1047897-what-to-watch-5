import React, {PureComponent} from "react";
import SmallMovieCard from "../../small-movie-card/small-movie-card";
import {moviesType} from "../../types/types";
import withVideoPlayer from "../../hoc/with-video-player/with-video-player";
import {CatalogCallSource} from "../../../utils/const";

const SmallMovieCardWrapper = withVideoPlayer(SmallMovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, source} = this.props;

    const moviesToRender = (source === CatalogCallSource.MY_LIST) ? movies.filter((movie) => movie.isMyList) : movies;

    return (
      <div className="catalog__movies-list">
        {moviesToRender.map((movie, index) => {
          return (
            <SmallMovieCardWrapper
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
