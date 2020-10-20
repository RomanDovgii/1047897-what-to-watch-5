import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {smallMovieCardType} from "../types/types";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isImage: true
    };
  }

  _showVideo() {
    this.timer = setTimeout(
        () => {
          if (this.state.isImage) {
            this.setState({
              isImage: false
            });
          }
        },
        1000
    );
  }

  render() {
    const {onMouseEnter, onMouseLeave, movie, renderPlayer} = this.props;
    const {name, videoUrl} = movie;

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

          this.setState({
            isImage: true
          });

          onMouseLeave();
        }}>
        <div className="small-movie-card__image">
          {this.state.isImage ?
            <img src={`img/` + imageName + `.jpg`} alt={name} width="280" height="175" />
            :
            renderPlayer(videoUrl, imageName)
          }
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
