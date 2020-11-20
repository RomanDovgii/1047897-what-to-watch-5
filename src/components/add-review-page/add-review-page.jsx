import React, {useEffect} from "react";
import {useRouteMatch} from "react-router-dom";
import Header from "../header/header";
import AddReviewForm from "../add-review-form/add-review-form";
import AddReviewBackground from "../add-review-background/add-review-background";
import AddReviewPoster from "../add-review-poster/add-review-poster";
import AddReviewHeading from "../add-review-heading/add-review-heading";
import {onUserIconClickType} from "../types/types";
import withActiveReviewForm from "../../hoc/with-active-review-form/with-active-review-form";
import {fetchSelectedMovie} from "../../store/actions/api-actions";
import {connect} from "react-redux";
import LoadingPage from "../loading-page/loading-page";

const AddReviewWrapper = withActiveReviewForm(AddReviewForm);

const AddReviewPage = (props) => {
  const {fetchMovie, onLoadCompletion, selectedMovie, onUserIconClick, onWTWLogoClick, isLoading} = props;
  const {backgroundColor, posterImage, backgroundImage, name} = selectedMovie;
  const id = useRouteMatch().params.id;

  useEffect(() => {

    if (isLoading) {
      fetchMovie(id);
    }

    if (JSON.stringify(selectedMovie) !== JSON.stringify({})) {
      onLoadCompletion();
    }
  }, [selectedMovie]);

  return !isLoading
    ? <section
      className="movie-card movie-card--full"
      style={{background: `${backgroundColor}`}}>
      <div className="movie-card__header">
        <AddReviewBackground
          backgroundImage = {backgroundImage}
          name = {name}
        />
        <AddReviewHeading/>
        <Header
          onUserIconClick = {onUserIconClick}
          onWTWLogoClick = {onWTWLogoClick}
          isNavigation = {true}
        />
        <AddReviewPoster
          poster = {posterImage}
          name = {name}
        />
      </div>

      <AddReviewWrapper
        backgroundColor = {backgroundColor}
        id = {id}
      />
    </section>
    : <LoadingPage/>;
};

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
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
