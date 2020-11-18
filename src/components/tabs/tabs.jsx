import React from "react";
import {MovieScreenTab} from "../../utils/const";
import {tabsType} from "../types/types";
import OverviewTab from "../overview-tab/overview-tab";
import ReviewsTab from "../reviews-tab/reviews-tab";
import DetailsTab from "../details-tab/details-tab";

const Tabs = (props) => {
  const {screen, movie, comments} = props;

  switch (screen) {
    case MovieScreenTab.OVERVIEW:
      return (
        <OverviewTab
          movie={movie}
          comments={comments}
        />
      );

    case MovieScreenTab.DETAILS:
      return (
        <DetailsTab
          movie = {movie}
        />
      );

    case MovieScreenTab.REVIEWS:
      return (
        <ReviewsTab
          movie={movie}
          comments={comments}
        />
      );
  }

  return null;
};

Tabs.propTypes = tabsType;

export default Tabs;
