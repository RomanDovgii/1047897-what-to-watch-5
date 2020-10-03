import React from "react";
import Header from "./modules/header";
import AddReview from "./modules/add-review";

const AddReviewPage = () => {
  return (
    <section className="movie-card movie-card--full">
      <Header/>
      <AddReview/>
    </section>
  );
};

export default AddReviewPage;
