import React, {useState} from "react";
import {MovieScreenTab} from "../../utils/const";
import {withActiveTabsType} from "../../components/types/types";

const withActiveTabs = (Component) => {
  const WithActiveTabs = (props) => {
    const [shownScreen, changeShownScreen] = useState(MovieScreenTab.OVERVIEW);

    return (
      <Component
        {...props}
        shownScreen={shownScreen}
        onTabClick={(value) => {
          changeShownScreen(value);
        }}
      />
    );
  };

  WithActiveTabs.propTypes = withActiveTabsType;

  return WithActiveTabs;
};

export default withActiveTabs;
