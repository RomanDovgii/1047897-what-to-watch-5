import React from "react";
import MovieCard from "./modules/movie-card";
import Catalog from "./modules/catalog";
import Footer from "./modules/footer";

const MoviePage = () => {
  return (
    <React.Fragment>
      <MovieCard/>

      <div className="page-content">
        <Catalog/>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default MoviePage;
