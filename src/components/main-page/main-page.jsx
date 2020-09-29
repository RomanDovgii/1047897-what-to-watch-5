import React from "react";
import MovieCardTop from "./modules/movie-top";
import Catalog from "./modules/catalog";
import Footer from "./modules/footer";
import {mainPageType} from "../types/index";

const MainPage = (props) => {
  const mainPage = props;

  return (
    <React.Fragment>
      <MovieCardTop
        name = {mainPage.name}
        genre = {mainPage.genre}
        releaseDate = {mainPage.releaseDate}
      />
      <div className="page-content">
        <Catalog
          genres = {mainPage.genres}
          movies = {mainPage.movies}
        />
        <Footer/>
      </div>
    </React.Fragment>

  );
};

MainPage.propTypes = {
  mainPage: mainPageType
};

export default MainPage;
