import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import Header from "../header/header";
import AddReview from "./modules/add-review";
import MovieCardBackground from "./modules/movie-card-background";
import MoviePoster from "./modules/movie-poster";
import HeadingFirstLevel from "./modules/heading-first-level";
import {onUserIconClickType} from "../types/types";
import withActiveReviewForm from "../../hoc/with-active-review-form/with-active-review-form";
import {fetchSelectedMovie} from "../../store/actions/api-actions";
import {connect} from "react-redux";
import LoadingPage from "../loading-page/loading-page";

const AddReviewWrapper = withActiveReviewForm(AddReview);

class AddReviewPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchMovie, match} = this.props;
    this._id = match.params.id;
    fetchMovie(this._id);
  }

  componentDidUpdate() {
    const {onLoadCompletion, selectedMovie} = this.props;

    if (JSON.stringify(selectedMovie) !== JSON.stringify({})) {
      onLoadCompletion();
    }
  }

  render() {
    const {onUserIconClick, onWTWLogoClick, selectedMovie, isLoading} = this.props;
    const {backgroundColor, posterImage, backgroundImage, name} = selectedMovie;

    return !isLoading
      ? <section
        className="movie-card movie-card--full"
        style={{background: `${backgroundColor}`}}>
        <div className="movie-card__header">
          <MovieCardBackground
            backgroundImage = {backgroundImage}
            name = {name}
          />
          <HeadingFirstLevel/>
          <Header
            onUserIconClick = {onUserIconClick}
            onWTWLogoClick = {onWTWLogoClick}
            isNavigation = {true}
          />
          <MoviePoster
            poster = {posterImage}
            name = {name}
          />
        </div>

        <AddReviewWrapper
          backgroundColor = {backgroundColor}
          id = {this._id}
        />
      </section>
      : <LoadingPage/>;
  }
}

AddReviewPage.propTypes = onUserIconClickType;

const mapStateToProps = ({DATA}) => ({
  selectedMovie: DATA.selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie(movieId) {
    dispatch(fetchSelectedMovie(movieId));
  },
});

export {AddReviewPage};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReviewPage));
