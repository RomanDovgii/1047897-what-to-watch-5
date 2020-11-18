import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Catalog from "../catalog/catalog";
import {CatalogHeadingVariant} from "../../utils/const";
import {myListPageType} from "../types/types";
import {connect} from "react-redux";
import {filterMoviesByMyList} from "../../store/selectors/my-list-selector";
import {HeaderHeadingVariant} from "../../utils/const";

const MyListPage = (props) => {
  const {onUserIconClick, onWTWLogoClick, movies} = props;

  return (
    <div className="user-page">
      <Header
        onUserIconClick = {onUserIconClick}
        onWTWLogoClick = {onWTWLogoClick}
        heading={HeaderHeadingVariant.MY_LIST}
      />
      <Catalog
        heading = {CatalogHeadingVariant.CATALOG}
        movies = {movies}
      />
      <Footer/>
    </div>
  );
};

MyListPage.propTypes = myListPageType;

const mapStateToProps = ({DATA}) => ({
  movies: filterMoviesByMyList(DATA)
});

export {MyListPage};
export default connect(mapStateToProps)(MyListPage);
