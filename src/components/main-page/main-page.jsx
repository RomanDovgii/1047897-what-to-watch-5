import React from "react";
import MovieCardTop from "./modules/movie-top";
import Catalog from "./modules/catalog";
import Footer from "./modules/footer";
import {appType} from "../types/index";

const MainPage = (props) => {
  const {name, genre, releaseDate, genres, movies} = props;

  return (
    <React.Fragment>
      <MovieCardTop
        name = {name}
        genre = {genre}
        releaseDate = {releaseDate}
      />
      <div className="page-content">
        <Catalog
          genres = {genres}
          movies = {movies}
        />
        <Footer/>
      </div>
    </React.Fragment>

  );
};

MainPage.propTypes = appType;

export default MainPage;
