import React, {PureComponent} from "react";
import {connect} from "react-redux";
import SmallMovieCard from "../../small-movie-card/small-movie-card";
import {moviesType} from "../../types/types";
import withVideoPlayer from "../../hoc/with-video-player/with-video-player";

const SmallMovieCardWrapper = withVideoPlayer(SmallMovieCard);

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

const mapStateToProps = (state) => ({
  movies: state.movieCards,
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
