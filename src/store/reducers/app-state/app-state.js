import {extend} from "../../../utils/utils";
import {SHOWN_MOVIES_COUNT, ActionType, HttpCode} from "../../../utils/const";

const initialState = {
  shownMoviesCount: SHOWN_MOVIES_COUNT,
  isPlayerPlaying: false,
  isAuthError: false,
  isError: false,
  error: {}
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
    case ActionType.THROW_ERR:
      return extend(
          state,
          {
            isAuthError: true
          }
      );
    case ActionType.REMOVE_ERR:
      return extend(
          state,
          {
            isAuthError: false
          }
      );
    case ActionType.CREATE_ERR:
      const errorCode = `${action.payload.status}`;
      if (errorCode === HttpCode.UNAUTHORIZED) {
        return state;
      }

      return extend(
          state,
          {
            isError: true,
            error: {
              text: action.payload.data.error,
              code: errorCode
            }
          }
      );
    case ActionType.FLUSH_ERR:
      return extend(
          state,
          {
            isError: false,
            error: {}
          }
      );
  }

  return state;
};

export {appState};
