import {extend} from "../../../utils/utils";
import {SHOWN_MOVIES_COUNT, ActionType} from "../../../utils/const";

const initialState = {
  shownMoviesCount: SHOWN_MOVIES_COUNT,
  isPlayerPlaying: false
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MORE:

      const updatedShownMoviesCount = state.shownMoviesCount + action.payload;

      return extend(
          state,
          {
            shownMoviesCount: updatedShownMoviesCount
          }
      );
    case ActionType.RESET_SHOWN_MOVIES:
      return extend(
          state,
          {
            shownMoviesCount: SHOWN_MOVIES_COUNT
          }
      );
    case ActionType.START_PLAYING:
      return extend(
          state,
          {
            isPlayerPlaying: !state.isPlayerPlaying
          }
      );
  }

  return state;
};

export {appState};
