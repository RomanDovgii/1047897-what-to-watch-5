import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";
import {CallSource} from "../../utils/const";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      isPlaying: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _showVideo() {
    this.timer = setTimeout(
        () => {
          if (this._isMounted) {
            this.setState({
              isPlaying: true
            });
          }
        },
        1000
    );
  }

  render() {
    const {onMouseEnter, onMouseLeave, movie, renderPlayer} = this.props;
    const {name, videoUrl} = movie;
    const {isPlaying} = this.state;

    const imageName = name.split(` `).join(`-`);

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={(evt) => {
          evt.preventDefault();

          onMouseEnter(movie);

          this._showVideo();
        }}
        onMouseLeave={(evt) => {
          evt.preventDefault();

          clearTimeout(this.timer);

          if (this._isMounted) {
            this.setState({
              isPlaying: false
            });
          }

          onMouseLeave();
        }}>
        <div className="small-movie-card__image">
          {renderPlayer(videoUrl, imageName, CallSource.CATALOG, isPlaying)}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to="/films/:id">
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = smallMovieCardType;
